let clean, cursor, allText = " ", position;
let backup_text = [];
let $bridge_start;
let bridges = [];
let anchors = [{"p-id": "", "text-start": "", "text-end": ""}];
let currentFocusedParagraph = null;
let db;
let FB_DOCNAME = ""

let BRIDGE_ICON = `<img src="imgs/bridge.jpeg" width="20" style="border-bottom: 5px solid blue;" alt="bridge"/>`;
// let bridge_store=[{"bridge-id": "", "link": ""}];
// TODO 


$(document).ready(function () {
    $(".bib-ref-num").hide();

    $("a.bib, a.tbl, a.fig").addClass("link-available");
  /*$('.navbar').hover(function()
  {
    // alert();
       // Mouse Over Callback
       $("#bridge-container").css("visibility", 'visible');
  
  }, function()
  { 
       // Mouse Leave callback
       $("#bridge-container").css("visibility", 'hidden');
  });*/

  // citation bridge
    $('a.bib, a.fig, a.tbl, a.ourLink').click(function (e) {
        // Get the section that is included in 
        let goback_id;
        if(e.target.nodeName == "SPAN")
            goback_id = $(e.target.parentElement).attr("id");
        else {
          goback_id = $(e.target).attr("id");
          if (!goback_id) {
            goback_id = Math.random().toString().substr(2, 8);
            $(e.target).attr("id", goback_id);
          }
        }
            

        // get element right before the bridge start
        let current_element_index = $(e.target.parentElement).contents().index(e.target);
        let txt_before_bridge = $(e.target.parentElement).contents().slice(0, current_element_index).get().map(n => n.textContent).join("").trim();
        let bridge_snippet = "";

        bridge_snippet = txt_before_bridge + " " + e.target.childNodes[0].nodeValue.trim();

        try {
            $(".bridge-snippet").html(
                `<a class="bridge-return" href="#${goback_id}">
                    ${bridge_snippet.split(" ").slice(-10).join(" ")}
                </a>`
            );
        } catch (e) {
            $(".bridge-snippet").html(c.wholeText.slice(-40, -1));
        }
            
            

        

        // if( $(`#${s}-${$(e.target).attr("href").substring(1)}`).length == 0 )   
        //   $( `<a role="button" id="${s}-${$(e.target).attr("href").substring(1)}" href="#${s}">${BRIDGE_ICON}</a>` ).insertAfter( $(e.target).attr("href") );
      })

    // going back to bridge
    $("body").on("click", ".bridge-return", function (e) {
        //e.preventDefault();
        //$(window).scrollTop($($(e.target).attr("href")).position().top - 30);
        $(".bridge-snippet").empty();
    })

    $('body').on('keypress', function (event) {
        if (event.key === "b") {
            $("a.bridge-return")[0].click();
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
  // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCTua642g885yQ_lqck4F7fwTwqlrYKfF4",
        authDomain: "ocean-78725.firebaseapp.com",
        projectId: "ocean-78725",
        storageBucket: "ocean-78725.appspot.com",
        messagingSenderId: "109351838437",
        appId: "1:109351838437:web:a96c9d256173e20d63ea0c"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

  db = firebase.firestore();

  FB_DOCNAME = window.location.pathname.split("/").slice(-1)[0].split(".html")[0];
  var docRef = db.collection("papers").doc( FB_DOCNAME );
  
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          bridges = doc.data()["bridges"];

          // append bridges container after every sentence
          document.querySelectorAll('span.bridge-part').forEach(el => {
            let p_id = $(el.parentElement).attr("id");
            bridges
              .filter(b => ((b[0]["p-id"] == p_id && b[0]["s-id"] == $(el).attr("id")) 
                || (b[1]["p-id"] == p_id && b[1]["s-id"] == $(el).attr("id"))))
                .map(b => {
                  $( `<a role="button" href="#${b[0]["p-id"] == p_id ? b[1]["s-id"] : b[0]["s-id"]}">${BRIDGE_ICON}</a>` ).insertAfter( $(el) );
                  return null;
                });
            
          });
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  let index = 0; 
  
  document.querySelectorAll('p').forEach(el => {
      // preprocess the html - assign ids to paragraphs and add span within a paragraph
      $(el).attr("part-id", index++).attr("id", `p-id${index-1}`);
      let paragraph_text = $(el).html();
      backup_text.push([paragraph_text]);
      
      $(el).empty();
      $(el).append(`<span class='observer-marker'></span>`);
      $.each(paragraph_text.split("."), function(i, v) { // divide by string
        $(el).append(`<span class='bridge-part' id='s-id${index-1}-${i}'>${v}.</span>`);
      });
      $(el).append(`<span class='observer-marker'></span>`);
  });


  
  // installing observer 
  document.querySelectorAll('.observer-marker').forEach((i) => {
    if (i) {
    //     const observer = new IntersectionObserver((entries) => {
    //         detectCurrentParagraph(entries, observer, i)
    //     },
    //     {threshold: 1, trackVisibility: true,
    // delay: 100 });    
    //     observer.observe(i);
    }
  })
  
  $('p').mouseup(function(e) {
    $(".banner").remove();

    if(e.target.nodeName == "A") return;
    
    var text = getSelectedText();
    var node = getSelectedNode();
    if (node && text.length) { // when people drag a text
      let paragraph_id = $(node.parentElement).attr("id");
      let sentence_id = $(node).attr("id");
      
      let banner;
      
      if($bridge_start) { // if user is working on a bridge
        banner = `<span class='banner'><button type="button" onclick='addAnchor("${paragraph_id}", "${sentence_id}")'>⚓</button> <button type="button" onclick='$bridge_start = null;addBridge("${sentence_id}", "${text}")'>${BRIDGE_ICON}start</button> <button type="button" onclick='addBridge("${sentence_id}", "${text}")'>${BRIDGE_ICON}end</button></span>`;
      } else {
        banner = `<span class='banner'><button type="button" onclick='addAnchor("${paragraph_id}", "${sentence_id}")'>⚓+</button> <button type="button" onclick='addBridge("${sentence_id}", "${text}")'>${BRIDGE_ICON}+</button></span>`;
      }
      
      $(".sidebar").append(banner);
    } else { // when people just click
      
    }
    
  });

  
});

function addAnchor(in_part_id, in_subpart_id) {
  $( ".banner" ).remove();
 
  backup_text[in_part_id][in_subpart_id] = backup_text[in_part_id][in_subpart_id].slice(0, position) + "⚓" + backup_text[in_part_id][in_subpart_id].slice(position);
  cursor = null; 
  $("p[part-id=" + in_part_id + "] span:eq("+ in_subpart_id  +")").empty()
      .html(backup_text[in_part_id][in_subpart_id]);
}

function addBridge(in_s_id, in_selected_text) {
  let b =  $(document.getElementById(in_s_id));
  
  if($bridge_start) {
    
    bridges.push({
      0: {"p-id": $($bridge_start.parent()).attr("id"), "s-id": $bridge_start.attr("id")},
      1: {"p-id": $(b.parent()).attr("id"), "s-id": in_s_id}
    });

    // append the bridge after the sentence
    $( `<a role="button" href="#${in_s_id}">${BRIDGE_ICON}</a>` ).insertAfter( $(`#${$bridge_start.attr("id")}`) );
    $( `<a role="button" href="#${$bridge_start.attr("id")}">${BRIDGE_ICON}</a>` ).insertAfter( $(`#${in_s_id}`) );

    $("#bridge-container").hide();
    $bridge_start = null;
    $( ".banner" ).remove();
    
    

    db.collection("papers").doc(FB_DOCNAME).set({
      bridges: bridges
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }
  else {
    $("#bridge-container").show();
    $( ".banner" ).remove();

    $bridge_start = b;

    $(".bridge-snippet").text(in_selected_text);
  }
  
  console.log(bridges);
}

function blurText(e) {
  debugger;
  if(e.target.checked) {
    $("p").css("filter", 'blur(4px)');
  }
  else {
    $("p").css("filter", 'blur(0px)');
  }
}

function cancelBridge() {
  if (confirm("Would you loke to go back?")) {
    // move back to original bridge start
    jumpTo($bridge_start.attr("id"));
    $bridge_start = null;
  } else {
    // do nothing and stay here
  }
  $("#bridge-container").hide();
}

function detectCurrentParagraph(entries, observer, header)  {
    entries.forEach((entry, i) => {
         $("p").removeClass("focused");
          $(".sidebar .viewer").empty();
         if (entry.isIntersecting) {
              $("#bib-bridge").empty();
             currentFocusedParagraph = entry.target.parentElement;
             // show existing anchors and bridges at this paragraph and append it at $(".viewer") 
         }
         else {
            
         }
      
         if(currentFocusedParagraph) {
           $(currentFocusedParagraph).addClass("focused");
           
          //  showViewer( $(currentFocusedParagraph).attr("id") );
         } else { // init if empty
          currentFocusedParagraph = entry.target.parentElement;
         }

         let current_section = $(currentFocusedParagraph.parentElement).attr("id") || "sec-1";
         current_section = parseInt(current_section.split("-")[1]);// + is_next ? 1 : -1;
         
          $("#btn-go-prev").attr("disabled", $(`#sec-${current_section - 1}`).length == 0 );
          $("#btn-go-next").attr("disabled", $(`#sec-${current_section + 1}`).length == 0 );
    })
}

//Grab selected text
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}

function getSelectedNode() {
  if(window.getSelection)
    return window.getSelection().focusNode.parentElement;
  else if (document.selection)
    return document.selection;
  
  alert("Not supported browser")
}

function gotoNext(is_next=true) {
  let sec_togo = $(currentFocusedParagraph.parentElement).attr("id");
  if(sec_togo)
    sec_togo = parseInt(sec_togo.split("-")[1]) + (is_next ? 1 : -1);
  else
    sec_togo = 2;

  jumpTo(`sec-${sec_togo}`);
}

function jumpTo(in_dest) { 
  // jump to the other bridge
  var top = document.getElementById(in_dest).offsetTop; //Getting Y of target element
  window.scrollTo(0, top); 
}

// show existing bridges and anchors in this paragraph
function showViewer(current_pid) {        
  bridges.filter(b => [b[0]["p-id"], b[1]["p-id"]].includes(current_pid)) 
    .map((b) => {
      let new_bridge = $(`<a role="button" href="#${b[0]["p-id"] == current_pid ? b[1]["p-id"] : b[0]["p-id"]}">${BRIDGE_ICON}</a>`);
      new_bridge.mouseover(function() {
        $(document.getElementById( b[0]["p-id"] == current_pid ? b[0]["s-id"] : b[1]["s-id"] )).addClass("bridge-hl");                 
     }).mouseout(function() {
       $(document.getElementById( b[0]["p-id"] == current_pid ? b[0]["s-id"] : b[1]["s-id"] )).removeClass("bridge-hl");
     });
      $(".sidebar .viewer").append(
        new_bridge
      );
      return null;
    });
}

//Wrap selected text in  tags with the class 'hl'
//Take some action after (in this case, a simple alert)
$("body").on("click", "p", function (e) {
    return;
    let el = e.target;
    console.log(el);
    // let button handler handles it
    console.log(["BUTTON", "A"].includes(e.target.nodeName))
          if(["BUTTON", "A"].includes(e.target.nodeName)) return; 
          // console.log($(el.parentNode).attr("pos"), )
          
          position = window.getSelection().focusOffset + parseInt($(el).attr("pos") || 0);
          console.log("position:");
          console.log(position);
          // remove previous anchor
          // if (cursor && position > cursor) 
          //     position--;
          // if (clean)
          //     el['innerText'] = clean;  
             
          let tmp_pos = 0; 
          let container_id = parseInt($(el.parentNode.parentNode).attr("part-id") || $(el.parentNode).attr("part-id"));
  // debugger;
          let sub_container_id = $("p[part-id="+ container_id + "] span.bridge-part").index(el) > -1 ? $("p[part-id="+ container_id + "] span.bridge-part").index(el) : $("p[part-id="+ container_id + "] span.bridge-part").index(el.parentNode); 
          let container_text = backup_text[container_id][sub_container_id];
          console.log("container_id  ", container_id);
          console.log(el, el.parentNode); 
          console.log("container_text ", container_text);
          
          // if banner exists, delete the previous one
          if($('.banner').length) {
              $('.banner').remove();
               debugger;
            
              el = el.parentNode;
              // $(el).html(backup_text[container_id][sub_container_id]); 
            
          }
          // else
          // // debugger;

          let t = "";
          $( "h2" ).each( function( i, el ) {
              var elem = $( el );
              t += `${i}: ` + elem.text() + "\n";
          });
          let selected_section = prompt("Where to? \n" + t);
          let bridge_id = "bridge-id" + Math.random().toString(36).substring(7);
          $($("h2")[parseInt(selected_section)]).append(`<a href='#${bridge_id}'>${BRIDGE_ICON}</a>`);

          jumpTo("section-" + selected_section);
  
          $(el).empty(); 
              
          // add banner
          // $(el).append("<span pos="+ tmp_pos + " class='charPosition'>" + container_text.slice(0, position)+"</span>").append("<span class='banner'><button onclick='addAnchor("+ container_id + ", "+ sub_container_id +")'>⚓</button> or <button onclick='addBridge("+ container_id + ", "+ sub_container_id +")'>🌉</button></span>").append("<span pos="+ position + " class='charPosition'>" + container_text.slice(position)+"</span>");
        
    
//           el.insertBefore(document.createTextNode('|'), textnode);
//           el['innerText'] = textnode.wholeText;
//           console.log(el.innerText.split("|"));
          
//           let ar = el.innerText.split("|");
//           $("#container").empty(); 
//           let tmp_pos = 0; 
//           $.each(ar, function (i, v) {
//             console.log(v);
//             $("#container").append("<span pos="+ tmp_pos + " class='charPosition'>" + v+"</span>");
            
//             $("#container").append("<span class='banner'><button onclick='alert'>⚓</button> or <button onclick='alert'>🌉</button></span>");
//             tmp_pos += v.length;
//           })
        
        // $( "<h2>New heading</h2>" ).replaceAll( "|" );
});