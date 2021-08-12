
var myAnnotation = {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'https://www.example.com/recogito-js-example/foo',
    'type': 'Annotation',
    'body': [{
    'type': 'TextualBody',
    'value': 'This annotation was added via JS.'
    }],
    'target': {
    'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
    }, {
        'type': 'TextPositionSelector',
        'start': 1138,
        'end': 1157
    }]
    }
};

var zivaAnnotations = [
    {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'anno1',
    'type': 'Annotation',
    'body': [{
        "purpose": "bridge",
        "type": "TextualBody",
        "value": "4 ZIVA: INTERFACE FOR ELICITING DOMAIN", 
        "href": "#sec-9"
    }],
    'target': {
        'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
        }, {
        'type': 'TextPositionSelector',
        'start': 981,
        'end': 985
        }]
    }
    },
    {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'anno2',
    'type': 'Annotation',
    'body': [{
        "purpose": "bridge",
        "type": "TextualBody",
        "value": "4.2 Concept creation",
        "href": "#sec-11",
        "blob": "Creating a taxonomy is an effective way of organizing information [20, 48]. Ziva provides an interface where SMEs can extract domain concepts (R2). Users are asked to categorize each example instance, presented as a card, via a card-sorting activity. Users first group cards by topic (general concepts of the domain such as atmosphere, food, service, price). Cards in each topic are then further divided cards into descriptions referencing specific attributes for a topic (e.g., cool, tasty, kind, high). The interface (Figure 2) was implemented as a drag-and-drop UI using LMDD [2]."
    }],
    'target': {
        'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
        }, {
        'type': 'TextPositionSelector',
        'start': 1183,
        'end': 1208
        }]
    }
    },
    {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'anno3',
    'type': 'Annotation',
    'body': [{
        "purpose": "bridge",
        "type": "TextualBody",
        "value": "4.3 Justification-elicitation interface",
        "href": "#sec-12"
    }],
    'target': {
        'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
        }, {
        'type': 'TextPositionSelector',
        'start': 1213,
        'end': 1246
        }]
    }
    },
    {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'anno4',
    'type': 'Annotation',
    'body': [{
        "purpose": "bridge",
        "type": "TextualBody",
        "value": "4.1 Representative sampling for instances creation",
        "href": "#sec-10",
        "blob": "As highlighted in the our formative interview, domain experts have limited time for labeling or sharing domain knowledge (R1). Hence, it is important to ask them to review only a few of instances and the sample can cover most concepts in the domain. Ziva extracts such a representative sample of m instances from a large training set of N text instances by the simple method of transforming the original text into ’tf-idf’ space, clustering the result using an algorithm such as k-means (setting k = m), and, for each cluster, returning the text instance closest to the cluster center. This method is not deterministic, but provides a reasonable set of representative instances, for cases where m < < N."
    }],
    'target': {
        'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
        }, {
        'type': 'TextPositionSelector',
        'start': 1252,
        'end': 1280
        }]
    }
    },
    {
    '@context': 'http://www.w3.org/ns/anno.jsonld',
    'id': 'anno5',
    'type': 'Annotation',
    'body': [{
        "purpose": "bridge",
        "type": "TextualBody",
        "value": "INTRODUCTION",
        "href": "#sec-2",
        "blob": "First, a common bottleneck in developing modern ML technologies is the requirement of a large quantity of labeled data. Second, many steps in an ML development pipeline, from problem definition to feature engineering to model debugging, necessitate an understanding of domain-specific knowledge and requirements."
    }],
    'target': {
        'selector': [{
        'type': 'TextQuoteSelector',
        'exact': 'that ingenious hero'
        }, {
        'type': 'TextPositionSelector',
        'start': 666,
        'end': 686
        }]
    }
    }
];



(function () {
    let bridge_start = false;
    let bridge_snippet = "";
    let pending_bridges = [];
    let ok_clicked = false;
    let src_id;

    let session_id = "user" + Math.random();

    var ColorSelectorWidget = function(args) {
    // 1. Find a current color setting in the annotation, if any
    var currentColorBody = args.annotation ? 
        args.annotation.bodies.find(function(b) {
        return b.purpose == 'highlighting';
        }) : null;

    // 2. Keep the value in a variable
    var currentColorValue = currentColorBody ? currentColorBody.value : null;

    // 3. Triggers callbacks on user action
    var addTag = function(evt) {
        if (currentColorBody) {
        args.onUpdateBody(currentColorBody, {
            type: 'TextualBody',
            purpose: 'highlighting',
            value: evt.target.dataset.tag
        });
        } else { 
        args.onAppendBody({
            type: 'TextualBody',
            purpose: 'highlighting',
            value: evt.target.dataset.tag
        });
        }
    }

    // 4. This part renders the UI elements
    var createButton = function(value) {
        var button = document.createElement('button');

        if (value == currentColorValue)
        button.className = 'selected';

        button.dataset.tag = value;
        button.style.backgroundColor = value;
        button.addEventListener('click', addTag); 
        return button;
    }

    var container = document.createElement('div');
    container.className = 'colorselector-widget';
    
    var button1 = createButton('RED');
    var button2 = createButton('GREEN');
    var button3 = createButton('BLUE');

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    return container;
    }

    var BridgeWidget = function(args) {
    // Check if there is already bridge here
    var currentBridges = args.annotation ? 
        args.annotation.bodies.find(function(b) {
        return b.purpose == 'bridge' || b.purpose == 'tagging';
        }) : null;  

    var currentPreBridges = args.annotation ? 
        args.annotation.bodies.find(function(b) {
        return b.purpose == 'pre-bridge';
        }) : null;  

    var currentPreSelect = args.annotation ? 
        args.annotation.bodies.find(function(b) {
        return b.purpose == 'pre-select';
        }) : null;  
    
    // Triggers callbacks when they click the button
    var addTag = function(evt) {
        // args.onAppendBody({
        //   type: 'TextualBody',
        //   purpose: 'pre-bridge',
        //   value: evt.target.dataset.tag,
        //   author: "soya"
        // });

        args.onUpdateBody({
        type: 'TextualBody',
        purpose: 'pre-bridge',
        value: "GREY",
        author: session_id
        });

        // args.onSaveAndClose({
        //   type: 'TextualBody',
        //   purpose: 'pre-bridge',
        //   value: "GREY",
        //   author: "soya"
        // });

        bridge_start = true;
        bridge_snippet = args.annotation.target.selector[0].exact;

        // add another pending bridges
        // pending_bridges.push( bridge_snippet );

        // r.addAnnotation(args);
        // debugger;

        // document.getElementById('ok-btn').click()
    }

    var finishBridge = function(evt) {
        
        args.onUpdateBody(currentPreSelect, {
        type: 'TextualBody',
        purpose: 'bridge',
        value: "WHITE",
        author: session_id,
        ocean_id: "ocean" + Math.random()
        });

        debugger;
        src_id = evt.target.dataset.src_id
        

        

        // delete pending_bridges[0];
    }

    // 4. This part renders the UI elements
    var createButton = function(value) {
        var button = document.createElement('button');

        button.dataset.tag = 'GREY';
        button.addEventListener('click', addTag); 
        button.textContent = value;
        return button;
    }

    var finishBridgeButton = function(value) {
        var button = document.createElement('button');

        button.classList.add("bridge-end-btn");
        button.style.fontSize = "17px";
        button.dataset.tag = 'YELLOW';
        button.dataset.src_id = value.id;
        button.addEventListener('click', finishBridge); 
        button.textContent = value.snippet;
        return button;
    }

    var container = document.createElement('div');
    container.className = 'bridgeselector-widget';
    // debugger;
    // if bridge exist, don't allow users to add more
    if(currentBridges && currentBridges.purpose == "tagging") {
        // var button1 = createButton('Go to bridge');
    
        // container.appendChild(button1);
    } else if(currentBridges && currentBridges.purpose == "bridge") {
        if(currentBridges.value && currentBridges.href) {
        // hide Ok and cancel button at the tooltip
        document.getElementById("ok-btn").style.visibility = "hidden";
        document.getElementById("cancel-btn").style.visibility = "hidden";

        if(!currentBridges.blob) {
            let a = document.createElement('a');
            a.href = currentBridges.href;

            let t = document.createElement('input');
            t.type = "button";

            t.value = currentBridges.value;
            a.appendChild(t);
            container.appendChild(a);
        }
        else {
            let t = document.createElement('span');

            t.textContent = currentBridges.blob;

            container.appendChild(t);

            // let a = document.createElement('a');
            // a.href = currentBridges.href;

            // t = document.createElement('input');
            // t.type = "button";

            // t.value = "Go to " + currentBridges.value;
            let a = document.createElement("button");
            a.textContent = "Go to " + currentBridges.value;
            a.addEventListener('click', function() {
            document.querySelectorAll(".r6o-annotation.WHITE").forEach(e => e.classList.remove("highlighted"));

            let target_annotation = document.querySelector(`[data-id='${currentBridges.href}']`);
            target_annotation.classList.add("highlighted");
            // target_annotation.scrollIntoView();
            location.href = currentBridges.href;
            }); 
            // a.appendChild(t);
            container.appendChild(a);
        }
        
        } else {
        document.getElementById("ok-btn").disabled = false;

        // Right after bridge is created 
        let t = document.createElement('span');

        t.textContent = "Press OK to create the bridge";
        container.appendChild(t);
        }
        
    } 
    else if(currentPreBridges) {
        let t = document.createElement('span');

        t.textContent = "Find another end of bridge";
        container.appendChild(t);

        
        
    }
        else if(currentPreSelect) {
        
        let rdo = document.createElement('input');
        rdo.type = "radio";
        rdo.name= "bridge-ctl";
        rdo.id = "start-bridge"
        rdo.checked = true;
        rdo.addEventListener('change', function() {
            document.getElementById("ok-btn").disabled = false;

            document.querySelectorAll(".bridge-end-btn").forEach(e => e.parentNode.removeChild(e));
        });

        let l = document.createElement('label');
        l.for = "start-bridge";
        l.textContent = "Add a bookmark"

        container.appendChild(rdo);
        container.appendChild(l);

        container.appendChild(document.createElement('br'));

        if(pending_bridges.length) {
            rdo = document.createElement('input');
            rdo.type = "radio";
            rdo.name= "bridge-ctl";
            rdo.id = "end-bridge"
            rdo.addEventListener('change', function() {
            document.getElementById("ok-btn").disabled = true;

            // bridge finishing buttons 
            pending_bridges.map(p => {
                var button1 = finishBridgeButton(p);
                
                container.appendChild(button1);
                return null;
                })
            });

            l = document.createElement('label');
            l.for = "end-bridge";
            l.textContent = "Link with another bookmark: "

            container.appendChild(rdo);
            container.appendChild(l);

            container.appendChild(document.createElement('br'));

            


        } 

        
    } else  {
        // args.onSaveAndClose({
        //   type: 'TextualBody',
        //   purpose: 'pre-bridge',
        //   value: "GREY",
        //   author: "soya"
        // });


        args.onAppendBody({
        type: 'TextualBody',
        purpose: 'pre-select',
        value: "GREY",
        author: session_id
        });

        // bridge_start = true;
        // bridge_snippet = args.annotation.target.selector[0].exact;

        // // add another pending bridges
        // pending_bridges.push( bridge_snippet );

    }
    

    return container;
    }

    /** A matching formatter that sets the color according to the 'highlighting' body value **/
    var ColorFormatter = function(annotation) {
    var highlightBody = annotation.bodies.find(function(b) {
        return b.purpose.includes("bridge") || b.purpose.includes("pre-select");
    });

    if (highlightBody)
        return highlightBody.value;
    }


    // Intialize Recogito
    var r = Recogito.init({
    content: 'content', // Element id or DOM node to attach to
    locale: 'auto',
    // readOn ly: true,
    widgets: [
        // { widget: 'COMMENT' },
        // ColorSelectorWidget,
        BridgeWidget,
        // { widget: 'TAG', vocabulary: ['Place', 'Person', 'Event', 'Organization', 'Animal'] }
    ],
    formatter: ColorFormatter,
    relationVocabulary: ['isRelated', 'isPartOf', 'isSameAs ']
    });

    var firebaseConfig = {
    apiKey: "AIzaSyCTua642g885yQ_lqck4F7fwTwqlrYKfF4",
    authDomain: "ocean-78725.firebaseapp.com",
    projectId: "ocean-78725",
    storageBucket: "ocean-78725.appspot.com",
    messagingSenderId: "109351838437",
    appId: "1:109351838437:web:a96c9d256173e20d63ea0c"
    };

    let COLLECTION_NAME = "webreader";

    var settings = {
    annotationTarget: "test",  // mandatory
    collectionName: COLLECTION_NAME // optional (default = 'annotations')
    }

    // Init the storage plugin
    recogito.FirebaseStorage(r, firebaseConfig, settings);

    var db = firebase.firestore();
    let init = false;

    // listen to add event from db
    db.collection(COLLECTION_NAME)
    .onSnapshot((doc) => {
        if(!init) {
        init = !init;
        return; 
        }
        if(!doc.docChanges) return;
        doc.docChanges().forEach(function(change) {
        console.log(change)
            if (change.type === "added") {
                // change.doc here is new a new document added by me
                debugger;
                // if it is grey, don't add it to the other clients' end
                if((change.doc.data().body[0].author != session_id) &&
                (change.doc.data().body[0].purpose == "bridge"))
                r.addAnnotation(change.doc.data());
            } else if (change.type === "removed") {
                // change.doc here is new a new document removed by me
                if(r.getAnnotations().length != doc.docChanges().length)
                r.removeAnnotation(change.doc.data());
            } else {
            // updated
            r.addAnnotation(change.doc.data());
            }
        });
    });

    r.on('createAnnotation', function (a) {
    // alert('created'); 
    ok_clicked = true;
    console.log("created");
    console.log(r.getAnnotations());      

    document.querySelector(`[data-id='${a.id}']`).id = a.id.substr(1);
    
    if(a.body[0].purpose == "pre-select") {
        let bridge_snippet = a.target.selector[0].exact;

        // add another pending bridges
        pending_bridges.push({
        "snippet": bridge_snippet,
        "id": a.id
        });
    } else if (a.body[0].purpose == "bridge") {
        // find the source annotation `data-id` and update the another end
        let src_annotation = r.getAnnotations().filter(an => an.id == src_id)[0];

        // get the section name of the newly created annotation
        document.querySelector(`[data-id='${a.id}']`)

        r.removeAnnotation(src_annotation);

        src_annotation.body[0] = {
        "purpose": "bridge",
        "href": a.id,
        "value": "here",
        "blob": a.target.selector[0].exact
        }
        
        r.addAnnotation(src_annotation);

        // manually update the old annotation from db since the updateAnnotation event is not triggered
        db.collection(COLLECTION_NAME).where("id","==", src_annotation.id).get().then(function(querySnapshot) {
            querySnapshot.docs[0].ref.update({
            body: [src_annotation.body[0]]
            });
        
        })

        // remove the pending bridges
        pending_bridges = pending_bridges.filter(p => p.id != src_annotation.id)
        
        // add a highlight to newly added annotation
        document.querySelectorAll(".r6o-annotation.WHITE").forEach(e => e.classList.remove("highlighted"));
        document.querySelector(`[data-id='${a.id}']`).classList.add("highlighted");
        
    }
    
    
    });

    

    // r.on('updateAnnotation', function (annotation, previous) {
    //   alert('updated', previous, 'with', annotation);
    // });

    // Wire the Add/Update/Remove buttons
    // document.getElementById('add-annotation').addEventListener('click', function () {
    //   r.addAnnotation(myAnnotation);
    // });

    // document.getElementById('update-annotation').addEventListener('click', function () {
    //   r.addAnnotation(Object.assign({}, myAnnotation, {
    //     'body': [{
    //       'type': 'TextualBody',
    //       'value': 'This annotation was added via JS, and has been updated now.'
    //     }],
    //     'target': {
    //       'selector': [{
    //         'type': 'TextQuoteSelector',
    //         'exact': 'ingenious hero who'
    //       }, {
    //         'type': 'TextPositionSelector',
    //         'start': 43,
    //         'end': 61
    //       }]
    //     }
    //   }));
    // });

    // document.getElementById('remove-annotation').addEventListener('click', function () {
    //   r.removeAnnotation(myAnnotation);
    // });

    // $('div').mouseup(function() {
        
    // });


    

    function getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';}
    // Switch annotation mode (annotation/relationships)
    var annotationMode = 'ANNOTATION'; // or 'RELATIONS'

    // var toggleModeBtn = document.getElementById('toggle-mode');
    // toggleModeBtn.addEventListener('click', function () {
    //   if (annotationMode === 'ANNOTATION') {
    //     toggleModeBtn.innerHTML = 'MODE: RELATIONS';
    //     annotationMode = 'RELATIONS';
    //   } else {
    //     toggleModeBtn.innerHTML = 'MODE: ANNOTATION';
    //     annotationMode = 'ANNOTATION';
    //   }

    //   r.setMode(annotationMode);
    // });
})();