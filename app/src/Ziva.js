const html_text = `<main> 
   <section class="front-matter"> 
    <section> 
     <header class="title-info"> 
      <div class="journal-title"> 
       <h1> <span class="title">Facilitating Knowledge Sharing from Domain Experts to Data Scientists for Building NLP Models</span> <br /> <span class="subTitle"></span> </h1> 
      </div> 
     </header> 
     <div class="authorGroup"> 
      <div class="author"> 
       <span class="givenName">Soya</span> 
       <span class="surName">Park</span>, CSAIL MIT, United States, 
       <a href="mailto:soya@mit.edu">soya@mit.edu</a> 
      </div> 
      <div class="author"> 
       <span class="givenName">April Yi</span> 
       <span class="surName">Wang</span>, School of Information University of Michigan, United States, 
       <a href="mailto:aprilww@umich.edu">aprilww@umich.edu</a> 
      </div> 
      <div class="author"> 
       <span class="givenName">Ban</span> 
       <span class="surName">Kawas</span>, IBM research, United States, 
       <a href="mailto:bkawas@us.ibm.com">bkawas@us.ibm.com</a> 
      </div> 
      <div class="author"> 
       <span class="givenName">Q. Vera</span> 
       <span class="surName">Liao</span>, IBM Research, United States, 
       <a href="mailto:vera.liao@ibm.com">vera.liao@ibm.com</a> 
      </div> 
      <div class="author"> 
       <span class="givenName">David</span> 
       <span class="surName">Piorkowski</span>, IBM Research, United States, 
       <a href="mailto:djp@ibm.com">djp@ibm.com</a> 
      </div> 
      <div class="author"> 
       <span class="givenName">Marina</span> 
       <span class="surName">Danilevsky</span>, Almaden Research Lab IBM Research, United States, 
       <a href="mailto:mdanile@us.ibm.com">mdanile@us.ibm.com</a> 
      </div> 
     </div> 
     <br /> 
     <div class="pubInfo"> 
      <p>DOI: <a href="https://doi.org/10.1145/3397481.3450637" target="_blank">https://doi.org/10.1145/3397481.3450637</a> <br />IUI '21: <a href="https://doi.org/10.1145/3397481" target="_blank">26th International Conference on Intelligent User Interfaces</a>, College Station, TX, USA, April 2021</p> 
     </div> 
     <div class="abstract"> 
      <p><small> Data scientists face a steep learning curve in understanding a new domain for which they want to build machine learning (ML) models. While input from domain experts could offer valuable help, such input is often limited, expensive, and generally not in a form readily consumable by a model development pipeline. In this paper, we propose Ziva, a framework to guide domain experts in sharing essential domain knowledge to data scientists for building NLP models. With Ziva, experts are able to distill and share their domain knowledge using domain concept extractors and five types of label justification over a representative data sample. The design of Ziva is informed by preliminary interviews with data scientists, in order to understand current practices of domain knowledge acquisition process for ML development projects. To assess our design, we run a mix-method case-study to evaluate how Ziva can facilitate interaction between domain experts and data scientists. Our results highlight that (1) domain experts are able to use Ziva to provide rich domain knowledge, while maintaining low mental load and stress levels; and (2) data scientists find Ziva's output helpful for learning essential information about the domain, offering scalability of information, and lowering the burden on domain experts to share knowledge. We conclude this work by experimenting with building NLP models using the Ziva output for our case study.</small> </p> 
     </div> 
     <div class="CCSconcepts"> 
      <ccs2012>
       <small> <span style="font-weight:bold;">CCS Concepts:</span> • <strong>Human-centered computing → Empirical studies in HCI</strong>; • <strong>Human-centered computing → Interactive systems and tools</strong>;</small> 
      </ccs2012> 
     </div> 
     <br /> 
     <div class="classifications"> 
      <div class="author"> 
       <span style="font-weight:bold;"><small>Keywords:</small></span> 
       <span class="keyword"><small>Human-in-the-loop machine learning</small>, </span> 
       <span class="keyword"> <small>CSCW</small>, </span> 
       <span class="keyword"> <small>Multi-disciplinary collaboration</small></span> 
      </div> 
      <br /> 
      <div class="AcmReferenceFormat"> 
       <p><small> <span style="font-weight:bold;">ACM Reference Format:</span> <br />Soya Park, April Yi Wang, Ban Kawas, Q. Vera Liao, David Piorkowski, and Marina Danilevsky. 2021. Facilitating Knowledge Sharing from Domain Experts to Data Scientists for Building NLP Models. In <em>26th International Conference on Intelligent User Interfaces (IUI '21), April 14–17, 2021, College Station, TX, USA.</em> ACM, New York, NY, USA, 12 pages. <a href="https://doi.org/10.1145/3397481.3450637" class="link-inline force-break" target="_blank">https://doi.org/10.1145/3397481.3450637</a></small></p> 
      </div> 
     </div> 
    </section> 
   </section> 
   <section class="body"> 
    <section id="sec-2"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">1</span> INTRODUCTION</h2> 
      </div> 
     </header> 
     <p>In recent decades, machine learning (ML) technologies have been sought out by an increasing number of professionals to automate their work tasks or augment their decision-making&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0083">83</a>]. Broad areas of applications are benefiting from integration of ML, such as healthcare&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0015">15</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0017">17</a>], finance&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0022">22</a>], employment&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0049">49</a>], and so on. However, building an ML model in a specialized domain is still expensive and time-consuming for at least two reasons. First, a common bottleneck in developing modern ML technologies is the requirement of a large quantity of labeled data. Second, many steps in an ML development pipeline, from problem definition to feature engineering to model debugging, necessitate an understanding of domain-specific knowledge and requirements. Data scientists therefore often require input from domain experts to obtain labeled data, to understand model requirements, to inspire feature engineering, and to get feedback on model behavior. In practice, such knowledge transfer between domain experts and data scientists is very much ad-hoc, with few standardized practices or proven effective approaches, and requires significant direct interaction between data scientists and domain experts. Building a high-quality legal, medical, or financial model will inevitably require a data scientist to consult with professionals in such domains. In practice, these are often costly and frustrating iterative conversations and labeling exercises that can go on for weeks and months, which usually still do not yield output in a form readily consumable by a model development pipeline.</p> 
     <p>In this work, we set out to develop methods and interfaces that facilitate knowledge sharing from domain experts to data scientists for model development. We chose to focus on natural language processing (NLP) modeling tasks, and we are especially motivated by real-world cold-start scenarios where labeled data is small or nonexistent. Informed by a formative interview with data scientists regarding current practices and challenges of learning from domain experts, we developed a domain-knowledge acquisition interface <strong>Ziva</strong> (With <strong>Z</strong>ero knowledge, How do <strong>I</strong> de<strong>V</strong>elop <strong>A</strong> machine learning model?). Instead of a data-labeling tool, Ziva intends to provide a diverse set of elicitation methods to gather knowledge from domain experts, then present the results as a repository to data scientists to serve their domain understanding needs and to build ML models for specialized domains. Ziva scaffolds the knowledge sharing in desired formats and allows asynchronous exchange between domain experts and data scientists. It also allows flexible re-use of the knowledge repository for different modeling tasks in the domain.</p> 
     <p>Specifically, informed by findings from the formative interview and requirements of NLP modeling tasks, Ziva focuses on eliciting key concepts in the text data of a domain (<tt>concept creation</tt>), and rationale justifying a label that a domain expert gives to a representative data instance (<tt>justification elicitation</tt>). In the current version of Ziva, we provide five different <tt>justification elicitation</tt> methods – bag of words, simplification, perturbation, concept bag of words, and concept annotation.</p> 
     <p>To evaluate and inform future development of Ziva, we conducted a case study in assessment of its coupled design goals: 1) to provide an efficient and user-friendly experience for domain experts to supply domain knowledge; 2) to support data scientists building NLP models, especially in cold-start scenarios.</p> 
     <p>We performed a lab study (N=12) and a crowd-deployment study (N=88) for participants to act as domain experts of a restaurant reviewing domain, and use Ziva to provide concepts and justification-based knowledge. We found the completion time and subjective workload using different elicitation methods varied. Interestingly, the popular keywords based justification (bag of words) approach led to higher self-reported task success but was considered more stressful.</p> 
     <p>We conducted an interview study with 7 data scientists to investigate whether and how Ziva could help them build NLP models. Through the study, we identified design requirements for domain knowledge-sharing tools in ML development workflow – scalability of information and lowering workload for domain experts. Participants also reflected on how the shared domain knowledge facilitated by Ziva may be utilized, including bootstrapping labels, supporting feature engineering, improving explainability, and training few-shot learning models. Based on these suggestions, we experimented with building a rule-based model using the data from our user study, and report the outcomes using knowledge elicited with different methods. In summary, the contributions of the paper are as follows:</p> 
     <ul class="list-no-style"> 
      <li id="list1" label="•">Through a formative interview with data scientists who built models in a specialized domain, we identified their under-supported needs to learn about a domain from domain experts.<br /></li> 
      <li id="list2" label="•">We developed Ziva, a tool providing <tt>concept creation</tt> and five kinds of <tt>justification elicitation</tt> to gather domain knowledge from domain experts in formats that could help data scientists build NLP models.<br /></li> 
      <li id="list3" label="•">We conducted a case study using Ziva to elicit domain knowledge then presented the output to data scientists in an interview study. Their feedback validated the utility of Ziva and provided design insights for tools that support knowledge sharing and collaboration between domain experts and data scientists.<br /></li> 
      <li id="list4" label="•">We also investigated the experience of domain experts using Ziva. We believe that our analysis could inform the design of knowledge elicitation methods for domain experts.<br /></li> 
     </ul> 
    </section> 
    <section id="sec-3"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">2</span> RELATED WORK</h2> 
      </div> 
     </header> 
     <p>We are informed by recent studies of data science practices, as well as ML and HCI work that leverages domain experts’ input to train or improve models, and research to facilitate knowledge sharing in teams and organizations.</p> 
     <section id="sec-4"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">2.1</span> Data Science practices and collaboration</h3> 
       </div> 
      </header> 
      <p>Recently the data science domain has spurred great research interest in the HCI community. Besides developing numerous tools to support specific data science tasks (e.g.&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0004">4</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0034">34</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0035">35</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0086">86</a>]), an emerging area of research has focused on studying the practices of data scientists in model development work. Many have recognized the collaborative nature of data science projects, with both intra- (among data scientists)&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0043">43</a>] and multi-disciplinary (with domain experts) collaboration&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0059">59</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0084">84</a>]. In particular, data scientists rely heavily on domain experts during core modeling building stages, such as data access and feature extraction. Domain experts also feature prominently in latter stages of data science projects such as model evaluation and communication of results&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0059">59</a>]. However, data scientists’ work faces significant challenges as such collaborative activities are currently not well supported&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0050">50</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0057">57</a>], and they are often left with no choice but to rely on “an intuitive sense of their data and processes”&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0053">53</a>].</p> 
      <p>Computational notebooks are positioned as a potential solution to both support collaborative coding and communicating results to stakeholders&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0078">78</a>]. However, a recent study reported reluctance for data scientists to directly communicate the in-progress model work in notebooks&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0065">65</a>]. While there are tools emerging to address the technology gaps to support collaborative data science practices, to our knowledge they tend to focus on supporting teams of data scientists and place domain experts with limited elicitation. In this work, we explore the approach of providing interfaces in which domain experts can create a knowledge repository for a sophisticated domain, so that it could be consumed by data scientists asynchronously and flexibly when the availability of domain experts is limited.</p> 
     </section> 
     <section id="sec-5"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">2.2</span> ML with domain experts</h3> 
       </div> 
      </header> 
      <p>There has been a long-standing desire to increase the involvement of domain experts in model building in both the ML and HCI communities. For example, tasks like text annotation, image annotation involve massive input from domain experts to provide domain-related feedback. Ziva interface is inspired by NLP text annotation tools&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0054">54</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0060">60</a>]. We take this design further to acquire domain knowledge for model development and data scientists. Recognizing the challenge of having domain experts label a large quantity of data, many ML works have explored more efficient learning algorithms to reduce the workload&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0068">68</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0073">73</a>], or utilize domain experts input as rules&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0045">45</a>], constraints&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0019">19</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0056">56</a>], prior information&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0011">11</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0070">70</a>], or feedback to re-weigh features&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0024">24</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0061">61</a>]. Given the prominence of label-hungry ML algorithms, weak supervision has become a popular approach to bootstrap labels based on feedback from domain experts&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0023">23</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0063">63</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0064">64</a>].</p> 
      <p>The HCI community is further concerned with the isolation of domain experts from the model development process, requiring thus data scientists to go through lengthy and asynchronous iterations to get their input&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0009">9</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0058">58</a>]. To tackle the problem, the sub-field of interactive machine learning (iML) is motivated to enable domain experts or end-users to directly drive model behaviors&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0009">9</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0036">36</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0080">80</a>]. Since domain experts might not have training in ML or programming, iML systems elicit their input through intuitive and interactive interfaces (e.g., visualization&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0039">39</a>], graphic user interfaces&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0009">9</a>], conversational interfaces&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0018">18</a>]), and a tight feedback loop for them to adjust their input. A variety of user input have been explored in prior work for different tasks in model development, including unseen training data to help correct the model's mistakes&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0018">18</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0025">25</a>], provide new feature-level input&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0044">44</a>] or adjustment to feature weights&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0068">68</a>], assessment of model performance&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0010">10</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0026">26</a>], error preferences&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0041">41</a>], parameter choices&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0052">52</a>], model ensemble&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0075">75</a>], etc.</p> 
      <p>Research on iML has been especially fruitful for NLP modeling tasks, partly because text data and features (e.g., bag of words) are often comprehensible to people, increasing the likelihood of obtaining effective feedback from domain experts or end-users&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0046">46</a>]. For example, the tools solicit feedback for learned features&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0069">69</a>] or support features ideation by the users&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0014">14</a>]. Interactive topic modeling is another well-explored area to incorporate domain experts’ input&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0021">21</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0037">37</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0038">38</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0071">71</a>], for example, by moving documents around or adding words, to refine clusters of topics.</p> 
      <p>Our work is informed by prior work on iML but takes a complementary approach by facilitating knowledge sharing from domain experts to data scientists. iML is not a panacea to effectively leverage domain experts’ input. There are known issues with letting ML novices directly adjust models&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0072">72</a>], such as lacking generalization or over-fitting&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0081">81</a>]. In practice it is not always feasible to set up an iML system for domain experts to work with. Currently most ML projects still rely on data scientists to write code and set up the pipelines&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0059">59</a>]. Moreover, having data scientists mediate the knowledge input offers the flexibility to apply it to different kinds of ML algorithms, and allow domain experts to provide reusable knowledge not constrained by a particular modeling task.</p> 
      <p>In general, it is possible to elicit diverse kinds of knowledge from people, not all of which could be consumed directly by a given ML model. For example, Stumpt et al. &nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0074">74</a>] and Ghai et al.&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0028">28</a>] explored what kind of feedback people naturally want to give seeing model explanations. Only a small subset of the various forms of feedback is readily consumable by existing ML algorithms. However, as the ML field rapidly advances, many novel usages of domain knowledge are being explored. For example, since ML models might use low-level features that are not human understandable (e.g., pixels of an image), interpretable ML works explored eliciting human-interpretable <em>concepts</em> in the domain (e.g., an object in the image) and use the concepts to explain the model decisions&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0029">29</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0042">42</a>]. Elicited domain concepts have also been used to create sub-groups for labeled data to enable “structure labeling”, which could lower the re-labeling burden when a target class changes&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0047">47</a>]. We further envision elicited domain concepts could help data scientists head start their model building, as revealed in our preliminary interview. By facilitating knowledge sharing from domain experts, we also hope to inspire novel algorithmic work that could leverage such a knowledge repository.</p> 
     </section> 
     <section id="sec-6"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">2.3</span> Technologies for knowledge sharing</h3> 
       </div> 
      </header> 
      <p>Ziva is also motivated by prior work on technologies that facilitate knowledge sharing in enterprise and organizations. Knowledge sharing has been long studied in the Computer Supported Collaborative Work (CSCW) community focusing on building collective knowledge repositories and locating related experts [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0005">5</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0067">67</a>]. Knowledge repository tools elicit various formal and informal information including manuals, best practices, common questions, and so on. For example, Goldberg et al. studied collaborative tagging and filtering mechanisms for workers to construct a knowledge repository [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0030">30</a>]; Answer Garden is a system to build a repository through people asking and answering questions [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0004">4</a>]; Terveen et al. designed a memory framework for large-scale software engineering where groups collectively build a shared memory [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0076">76</a>]; Nam and Ackerman studied methods for elicitation of informal information into more organized forms [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0055">55</a>].</p> 
      <p>Knowledge sharing in ML projects poses unique challenges&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0008">8</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0016">16</a>] to make the knowledge transferrable into ML specifications. The challenges are amplified in sophisticated domains. For example, for a medical ML model, a clinician may have to help data scientists understand complex drug information. We inform the design of Ziva both by prior work on involving domain experts in data science projects and model development, and a preliminary interview study to understand how data scientists learn from domain experts. Meanwhile, studies have warned that knowledge sharing and repository tools often fail in practice&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0033">33</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0082">82</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0088">88</a>], if the design fails to take into account the social dynamics, including what benefits and demands these technologies bring for both the knowledge providers and the knowledge consumers&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0005">5</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0031">31</a>]. Thereby we evaluate Ziva by involving both the knowledge <strong>consumers</strong>–data scientists, and the knowledge <strong>providers</strong>–domain experts.</p> 
     </section> 
    </section> 
    <section id="sec-7"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">3</span> PRELIMINARY INTERVIEW</h2> 
      </div> 
     </header> 
     <p>To understand how data scientists grasp a domain, we conducted semi-structured interviews with four data scientists working on NLP models (2 females, 2 males). Each interview was 45 minutes long and guided by a script that asks participants about their recent projects with domain experts and their typical interactions with those domain experts. We recruited participants via posting on slack channels of an international technology company. Each interviewee was compensated <font style="normal">$</font>15 for their time. We summarized our interviewees’ projects and challenges in Table&nbsp;<a class="tbl" href="#tab1">1</a>. As a result, we identified the current practices of learning from domain experts and design requirements for our tool.</p> 
     <div class="table-responsive" id="tab1"> 
      <div class="table-caption"> 
       <span class="table-number">Table 1:</span> 
       <span class="table-title">Interviewees information.</span> 
      </div> 
      <table class="table"> 
       <thead> 
        <tr> 
         <th style="text-align:left;border-right: 2pt solid #000000;"><strong>Pn (domain)</strong></th> 
         <th style="text-align:left;"><strong>Model (reasons of choosing the model)</strong></th> 
         <th><strong>Methods of knowledge exchange</strong></th> 
        </tr> 
       </thead> 
       <tbody> 
        <tr> 
         <td style="text-align:left;border-right: 2pt solid #000000;">P1 (Legal, law)</td> 
         <td style="text-align:left;">Rule-based (transparency, few labels)</td> 
         <td>Instance perturbation</td> 
        </tr> 
        <tr> 
         <td style="text-align:left;border-right: 2pt solid #000000;">P2 (Disaster recovery)</td> 
         <td style="text-align:left;">Supervised neural net (sufficient labelers)</td> 
         <td>Education session of domain overview domain experts labeling</td> 
        </tr> 
        <tr> 
         <td style="text-align:left;border-right: 2pt solid #000000;">P2 (”)</td> 
         <td style="text-align:left;">Rule-based (transparency, few labels)</td> 
         <td>Domain experts think aloud labeling data</td> 
        </tr> 
        <tr> 
         <td style="text-align:left;border-right: 2pt solid #000000;">P3 (Customer categorization)</td> 
         <td style="text-align:left;">Random forest (transparency)</td> 
         <td>Pair-authoring (Go over analysis together with domain experts &nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0078">78</a>])</td> 
        </tr> 
        <tr style="border-bottom: 2pt solid #000000;"> 
         <td style="text-align:left;border-right: 2pt solid #000000;">P4 (Sports)</td> 
         <td style="text-align:left;">AutoML (time)</td> 
         <td>Brute-force model building</td> 
        </tr> 
       </tbody> 
      </table> 
     </div> 
     <section id="sec-8"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">3.1</span> Limited time and limited best practices</h3> 
       </div> 
      </header> 
      <p>All of our data scientist interviewees indicated they often need domain experts’ help and feedback. However, domain experts are busy and have little time to spare. One said: <em>“The first issue is getting hold of their time... I think hardly I was getting one day a week, you can say one hour a week, not even an entire day.”</em> So data scientists try to extract as much knowledge as they can in the limited time they have. They have to spend significant time preparing for these discussions. For example, they often manually curated examples such as mis-classified instances and instances that contain the unfamiliar keywords to ground the discussion during the meetings with domain experts. Even though there is no standard way to extract domain knowledge across different domains, but through <em>mutual effort</em> they find what works best for a project. We identified the following approaches to learn domain knowledge from domain experts:</p> 
      <p><strong>Example-driven conversation:</strong> The first field of approaches is domain knowledge sharing based on examples. By inquiring about how and why domain experts would label or make decisions for these examples, data scientists learn <em>rationales</em> of how the model should behave for the instances. There are three tactics mentioned by our interviewees. P2 observed domain experts during labeling to learn the domain experts’ thought process: <em>“They would go line by line in front of me so that I can also see what their brain is looking at classifying them.”</em> P1 initially took P2’s approach, but due to the complexity of the law domain, explaining rationale required extensive background knowledge. Oftentimes, it is unclear to data scientists how to connect the explanations provided by the domain experts to model specifications. P1 used a strategy called <em>instance perturbation</em> – for a given instance, the domain experts were asked to minimally change the instance until the model changes the label and discuss the reasons. With this, data scientists were able to narrow in on the parts of the instance that should be the most important to the model's decision. Instead of aiming to build a perfect model right off the bat, P4 deployed their model first and incrementally improved the model upon domain experts’ request. Whenever domain experts encountered mis-classified results, they shared the instances with data scientists and discussed why they were mis-classified.</p> 
      <p><strong>General background knowledge acquisition:</strong> Concepts are key units of information for a given domain, such as notions, entities, components or properties. A set of domain concepts can be seen as a <em>taxonomy</em>. Understanding them could help data scientists make sense of the domain. Participants reported approaches to learn concepts in an unfamiliar domain. P2 and P3 said domain experts in one of their projects offered a <em>lecture</em> to explain key concepts their domain. For P2, domain experts gave an overview and touched on the basic concepts of each class. P3 &nbsp;<em>pair-authored</em>&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0078">78</a>] with domain experts to bridge concepts and a mathematical formula that encapsulates the information. With this iterative learning process, data scientists were able to kick start model building. P2 said <em>“I think that was very helpful because after that, my dependency reduced a bit. I could myself assess that what category they belong to.”</em></p> 
      <p><strong>Summary:</strong>. From our interview, we derived several design requirements to design Ziva. We found that the usage of domain knowledge is not only limited to labeling but also other parts in ML development, sometimes open-ended learning. Thus, interfaces of Ziva ought to facilitate domain-knowledge learning of data scientists in general throughout the development workflow. More specifically, we found that the tool should scaffold domain experts to efficiently elicit domain knowledge within short amount of time (<strong>R1</strong>). Next, a tool should help data scientists to extract basic domain concepts (<strong>R2</strong>). Lastly, data scientists indicated that they often learn from domain experts’ rationale, especially how they justify a decision or label. Hence, the tool needs to facilitate label justification sharing (<strong>R3</strong>).</p> 
     </section> 
    </section> 
    <section id="sec-9"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">4</span> ZIVA: INTERFACE FOR ELICITING DOMAIN KNOWLEDGE</h2> 
      </div> 
     </header> 
     <p>This section introduces the interface of Ziva. Ziva provides features for domain experts to create domain concepts and elicit justification from representative instances that are automatically curated by Ziva. We discuss Ziva's different components and how they meet the design requirements in detail. </p>
     <figure id="fig1"> 
      <img src="https://dl.acm.org/cms/attachment/9775964a-51e8-46c8-8e27-636fa243f104/iui21-3-fig1.jpg" class="img-responsive" alt="Figure 1" /> 
      <figcaption> 
       <span class="figure-number">Figure 1:</span> 
       <span class="figure-title">To facilitate domain knowledge sharing, Ziva presents representative instances and to interfaces to review the instances to domain experts, then which will be used by data scientists.</span> 
      </figcaption> 
     </figure> 
     <p></p> 
     <section id="sec-10"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">4.1</span> Representative sampling for instances creation</h3> 
       </div> 
      </header> 
      <p>As highlighted in the our formative interview, domain experts have limited time for labeling or sharing domain knowledge (R1). Hence, it is important to ask them to review only a few of instances and the sample can cover most concepts in the domain. Ziva extracts such a representative sample of <em>m</em> instances from a large training set of <em>N</em> text instances by the simple method of transforming the original text into ’tf-idf’ space, clustering the result using an algorithm such as k-means (setting <em>k</em> = <em>m</em>), and, for each cluster, returning the text instance closest to the cluster center. This method is not deterministic, but provides a reasonable set of representative instances, for cases where <em>m</em> &lt; &lt; <em>N</em>.</p> 
     </section> 
     <section id="sec-11"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">4.2</span> Concept creation</h3> 
       </div> 
      </header> 
      <p>Creating a taxonomy is an effective way of organizing information&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0020">20</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0048">48</a>]. Ziva provides an interface where SMEs can extract domain concepts (R2). Users are asked to categorize each example instance, presented as a card, via a card-sorting activity. Users first group cards by topic (general concepts of the domain such as atmosphere, food, service, price). Cards in each topic are then further divided cards into descriptions referencing specific attributes for a topic (e.g., cool, tasty, kind, high). The interface (Figure <a class="fig" href="#fig2">2</a>) was implemented as a drag-and-drop UI using LMDD [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0002">2</a>].</p> 
     </section> 
     <section id="sec-12"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">4.3</span> Justification-elicitation interface</h3> 
       </div> 
      </header> 
      <p>Once a domain expert finishes the concept extraction, they review each instance using one of elicitation interfaces, which ask the domain expert to justify an instance's label (this information is then intended for consumption by data scientists (R3)). We used Materialize to implement the justification elicitation conditions.</p> 
      <p>The <tt>justification elicitation</tt> interfaces were designed through an iterative process of paper prototyping, starting with initial designs inspired by our preliminary interviews. As we conducted paper prototyping, we examined if (1) the answers from different participants were consistent and (2) the information from participants’ answers were useful to data scientists. We now describe the five different justification elicitation methods that we created and evaluated, and highlight the design rationale where appropriate. </p>
      <figure id="fig2"> 
       <img src="https://dl.acm.org/cms/attachment/50305a2d-66fe-4ebf-ab9a-c460fcfbc619/iui21-3-fig2.jpg" class="img-responsive" alt="Figure 2" /> 
       <figcaption> 
        <span class="figure-number">Figure 2:</span> 
        <span class="figure-title">Ziva interface: domain experts first extract domain knowledge with curated instances. Then they review each instance one by one using one of justification-elicitation interfaces.</span> 
       </figcaption> 
      </figure> 
      <p></p> 
      <p><strong>Bag of words.</strong> This base condition reflects the most common current approach. Given an instance and a label (e.g., positive, negative), the domain experts are asked to highlight the text snippets that justify the label assignment.</p> 
      <p><strong>Instance perturbation.</strong> Inspired by one of our data scientists in the formative study, this condition asks a domain expert to <em>perturb</em> (edit) a part of the instance such that the assigned label is no longer justifiable by the resulting text. For example, in the restaurant domain, <em>“our server was kind”</em>, can be modified to no longer convey a positive sentiment by either negating an aspect (e.g., <em>“our server was not kind”</em>) or altering it (e.g., <em>“our server was rude”</em>).</p> 
      <p>This strategy is also inspired by the research area of generating natural language adversarial examples [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0007">7</a>]. Such approaches algorithmically alter training examples to create similar adversarial examples that fool well-trained NLP models. In our scenario, the domain expert is seeking to alter training examples in order to point out the most salient characteristics to the data scientist; the latter learns from this information, combining it with syntactic and semantic analysis of the original and perturbed instances.</p> 
      <p><strong>Instance simplification.</strong> This condition asks domain experts to shorten an instance as much as possible, leaving only text that justifies the assigned label of the original instance. For example, <em>“That's right. The red velvet cake... ohhhh.. it was rich and moist”</em>, can be simplified to <em>“The cake was rich and moist”</em>, as the rest of the content does not convey any sentiment, and can therefore be judged irrelevant to the sentiment analysis task.</p> 
      <p>This condition is inspired by the plethora of methods for sentence simplification used in extractive text summarization [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0077">77</a>]. In particular, the domain expert is performing <em>sentence reduction</em> as in [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0040">40</a>]. The output can be considered to be a concise summary of the original instance, keeping only that content which is directly relevant to the sentiment analysis task. The result for the data scientist is clean, compact, and fully relevant high quality training examples.</p> 
      <p><strong>Concept bag of words.</strong> This condition incorporates the concept extracted in the prior step. Similar to the Bag of words condition, domain experts are asked to highlight relevant text within each instance to justify the assigned label; however, each highlight must be grouped into one of the concepts. If, during <tt>Concept creation</tt>, the domain expert copied a card to assign multiple topics and descriptions, then the interface prompts multiple times to highlight relevant text for each one. For example, if they classified the instance, <em>“That's right. The red velvet cake... ohhhh.. it was rich and moist”</em>, into the concept <em>“food is tasty”</em>, they can select <em>rich</em>, <em>moist</em> and <em>cake</em> as being indicative words for that concept.</p> 
      <p><strong>Concept annotation.</strong> This condition is similar to the above Concept bag of words condition. However, when annotating the instance text, domain experts are directed to distinguish between words relevant to the topic and words relevant to the description. Given the above sample instance, the domain expert would need to indicate which part of the sentence applies to <em>food</em> (e.g., <em>cake</em>) and which to <em>tasty</em> (e.g., <em>rich and moist</em>). Both this and the previous concept condition are motivated by the well-established knowledge that a variety of NLP tasks, such as relation extraction, question answering, clustering and text generation can benefit from tapping into the conceptual relationship present in the hierarchies of human knowledge [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0085">85</a>]. Learning taxonomies from text corpora is a significant NLP research direction, especially for long-tailed and domain-specific knowledge acquisition&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0079">79</a>].</p> 
      <p>In the rest of the paper, we present a case study to evaluate the utility of the Ziva interface in two parts. In Section&nbsp;<a class="sec" href="#sec-13">5</a>, we conduct a lab experiment and a crowd experiment in which participants acted as domain experts using Ziva. We choose the domain of restaurant reviews (Yelp Open Dataset[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0003">3</a>]) and the NLP task of sentiment analysis, as being extremely familiar and easy enough to understand for most people to qualify as domain experts. In Section&nbsp;<a class="sec" href="#sec-16">6</a>, we conduct an interview study with data scientists to evaluate the utility of domain knowledge collected in the above experiments. We instruct the data scientists to assume no previous knowledge of the domain, so we could use the elicited knowledge about restaurant reviewing as proxy to understand how Ziva could help them build NLP models.</p> 
     </section> 
    </section> 
    <section id="sec-13"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">5</span> EVALUATION ON DOMAIN EXPERTS’ EXPERIENCE</h2> 
      </div> 
     </header> 
     <p>We recruited participants to act as domain experts of restaurant reviewing to use Ziva. In a lab study (N=12), we compared participants’ task completion and experience with all concept and justification elicitation methods, and gathered their qualitative feedback. To allow quantitatively compare the results of different justification elicitation methods, we conducted a follow-up crowd experiment (N=88).</p> 
     <section id="sec-14"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">5.1</span> Lab study</h3> 
       </div> 
      </header> 
      <p><strong>Study protocol</strong>: To avoid noisiness in labeling, we pre-labeled the set of yelp reviews instance so we could focus on comparing the elicitation methods. We created binary labels based on ground-truth ratings: if the number of stars is 1 or 2 for a review, we labeled it as negative, 4 or 5 as positive&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0087">87</a>]. We then took a random balanced sample of 10,000 instances. 8,000 were used as a (balanced) ’training set’, from which we extracted ten representative instances to use in the study (see Section <a class="sec" href="#sec-10">4.1</a>.) We set the other 2,000 (balanced) instances to use as a test set for analyzing the performance of models built from the study output (see Section <a class="sec" href="#sec-16">6</a>).</p> 
      <p>We recruited participants (5 female, 7 male), who self-report little or no knowledge in ML via posting on slack channels of an international technology company. Participants are designers, graduate students, researchers, trained professionals, skilled laborers, software engineers and project managers. To compensate their time, we ran a <font style="normal">$</font>30 raffle.</p> 
      <p>Participants were given introduction to the project and a tutorial of the Ziva interface. They were also given a practice task in a different domain, i.e., clothing. For the concept extraction task, all participants used the same interface. For the justification interface, we randomly assigned each participant one treatment from the elicitation methods without concepts (bag of words, label perturbation and simplification), and one from those with concepts (concept bag of words and concept annotation). Thus, each participant experienced two elicitation interfaces and reviewed 5 instances each. After each interface, participants were asked to fill out the NASA TLX form [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0032">32</a>] to evaluate their subjective workload and share their feedback. The entire session lasted about for up to one hour.</p> 
      <p><strong>Task Results</strong>: One participant could not complete the second <tt>justification</tt> interface. We reported the summary of <tt>concepts</tt> generated by participants, as well as quantitative and qualitative experience using <tt>justification</tt> methods.</p> 
      <p><em>Concept creation</em>. Participants took 879.7 seconds on average (<em>σ</em>=385.4). They created 3.92 topics on average (<em>σ</em>=1.11). Everyone included <em>Food quality</em> and <em>Customer service</em> in their topics. To assess taxonomy from each domain expert, we examined the consistency between domain experts and coverage of the restaurant domain.</p> 
      <ul class="list-no-style"> 
       <li id="list5" label="•">Consistency between domain experts: The union of all topics across all participants includes following 10 topics: ambiance, cuisine, food quality, customer service, additional service, complaint, speciality, reservation, location, and price. For each topic, we rated whether each taxonomy intersects with the topic or not. Thus, the inter-rater reliability (IRR) across all domain experts was 58% using Fleiss’ <em>κ</em>.<br /></li> 
       <li id="list6" label="•">Coverage of the domain: We selected 3 additional instances which were not shown to the participants. We used our curation method to pick another set of representative instances. We then inspected how many instances can be categorized using each taxonomy resulting in a coverage of 69% (25 out of 36 instances).<br /></li> 
      </ul> 
      <div class="table-responsive" id="tab2"> 
       <div class="table-caption"> 
        <span class="table-number">Table 2:</span> 
        <span class="table-title">Average task completion time (standard deviation) of lab study participants.</span> 
       </div> 
       <table class="table"> 
        <tbody> 
         <tr style="border-bottom: 2pt solid #000000;"> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Bag of words</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Simplification</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Perturbation</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Concept bag of words</strong></td> 
          <td><strong>Concept annotation</strong></td> 
         </tr> 
         <tr> 
          <td style="text-align:center;border-right: 2pt solid #000000;">39.2 s (20.7)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">106.6 s (86.8)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">107.2 s (48.0)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">36.8 s (14.0)</td> 
          <td>81.9 s (40.5)</td> 
         </tr> 
         <tr> 
          <td style="text-align:center;border-right: 2pt solid #000000;"></td> 
          <td></td> 
          <td></td> 
          <td></td> 
          <td></td> 
         </tr> 
        </tbody> 
       </table> 
      </div> 
      <p><em>Justification elicitation</em>. The average task completion time in each condition is summarized in Table&nbsp;<a class="tbl" href="#tab2">2</a>. Since each participant was assigned two out of five justification elicitation, there were only a few data points per elicitation technique (3 to 5 per technique). To further investigate in a larger population, we deployed Ziva on a crowd platform described in the following section.</p> 
      <p>Most participants found the bag of words condition easy to complete. One participant said: <em>“This was easy because a lot of words were clearly positive or negative, such as ”terrible” or ”delicious””</em>. However, some considered it tricky to identify words that are indicative of the overall sentiment. For example, one participant said, <em>“this can be just descriptive without any positive or negative feelings without the context. So it's difficult to isolate the context out of the words.”</em></p> 
      <p>For the simplification task, participants indicated the task was straightforward. Participants said <em>“easy as it had eliminated redundant and unnecessary words”</em> and <em>“quite easy and intuitive, paraphrasing keeping the original intent is what I usually do as part of minutes of meetings”</em>. One participant said sometimes the task became hard because some instances could not be obviously shortened and instead need to be entirely rewritten.</p> 
      <p>Participants said perturbation is also straightforward but it required them to understand the entire instance thoroughly. One participant commented, <em>“It was kind of hard because I don't know some of the words”</em>. Another participant suggested that if the interface suggested antonyms, it would be easier to finish the task.</p> 
      <p>With concept bag of words, participants said it allowed subjective and nuanced elicitation, as they could pick words associated with a <tt>concept</tt> without judging their sentiment. However, it led to more varied results among participants. For example, for the concept <em>Food is tasty</em>, and the instance <em>Ohhhh... The red velvet cake is rich and moist</em>, most participants selected <tt>rich</tt> and <tt>moist</tt>. One participant said <em>“Even <tt>red velvet cake</tt>could be the indicative words if you personally like the cake”</em>. Others said <em>“maybe <tt>ohhhh</tt>part can be included”</em> and <em>“<tt>moist</tt>doesn't necessarily mean delicious”</em>.</p> 
      <p>For the concept annotation task, participants said it is straightforward to choose words directly mapped to each token. On the other hand, it complicated the articulation to have to label in such fine granularity. One participant commented, <em>“slightly tedious as it required me to comprehend on how best to label the words accordingly”</em>.</p> 
     </section> 
     <section id="sec-15"> 
      <header> 
       <div class="title-info"> 
        <h3> <span class="section-number">5.2</span> Crowd Experiments</h3> 
       </div> 
      </header> 
      <p>To assess different <tt>justification</tt> methods on larger population, we deployed the Ziva interface on a crowd platform.</p> 
      <div class="table-responsive" id="tab3"> 
       <div class="table-caption"> 
        <span class="table-number">Table 3:</span> 
        <span class="table-title">Crowd experiment Likert result. H statistics (p-value) in significance level 0.05</span> 
       </div> 
       <table class="table"> 
        <tbody> 
         <tr style="border-bottom: 2pt solid #000000;"> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Mentally demanding</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Successfully accomplishing</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Hard to accomplish</strong></td> 
          <td style="text-align:center;border-right: 2pt solid #000000;"><strong>Insecure, Stressed</strong></td> 
         </tr> 
         <tr style="border-bottom: 2pt solid #000000;"> 
          <td style="text-align:center;border-right: 2pt solid #000000;">2.0825 (.72059)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">8.7959 (<strong>.06641</strong>)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">8.0609 (.08937)</td> 
          <td style="text-align:center;border-right: 2pt solid #000000;">9.9411 (<strong>.04143</strong>)</td> 
         </tr> 
        </tbody> 
       </table> 
      </div> 
      <figure id="fig3"> 
       <img src="https://dl.acm.org/cms/attachment/b94381a8-7231-48d8-a3c1-32cb63b39e36/iui21-3-fig3.jpg" class="img-responsive" alt="Figure 3" /> 
       <figcaption> 
        <span class="figure-number">Figure 3:</span> 
        <span class="figure-title">Post-question responses in NASA TLX (1- Very low, 7- Very high) (Crowd experiment participants, n=88).</span> 
       </figcaption> 
      </figure> 
      <p><strong>Study Protocol</strong>: Using our representative sampling method, we extracted 10 reviews from the datasets used in the lab study. We pre-populated a taxonomy. In order to provide a representative sampled <tt>concept</tt>, we recruited 5 volunteers and asked them to extract concepts of the restaurant domain using the <tt>concept extraction</tt> interface and two of the authors aggregated the taxonomy.</p> 
      <p>We installed 5 test questions for each condition with ground-truth created by the authors. If a crowd worker did not pass more than half of test questions, they can not continue to the Human Intelligence Task (HIT). Each worker was given one of the five justification elicitation interfaces, and reviewed 10 instances.</p> 
      <p>We recruited our study participants from Appen&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0001">1</a>]. We compensated them with <font style="normal">$</font>0.5 per HIT, they are rewarded <font style="normal">$</font>2.5 in addition for test questions. From the lab study, we observed each HIT took less than 2 minutes on average, which makes hourly wage of <font style="normal">$</font>15. After the tasks, we asked them to fill out the same NASA TLX form to report on their subjective workload. Participants were rewarded additional <font style="normal">$</font>3 for the survey. A total of 88 crowd workers completed our study resulting in 857 instances with elicitated data.</p> 
      <p><strong>Result</strong>: We analyzed participants’ survey responses using an one-way Kruskal–Wallis ANOVA as summarized in Table&nbsp;<a class="tbl" href="#tab3">3</a>. There was marginal difference in self-reported success of task accomplishment and significant difference in stress level across justification elicitation methods.</p> 
      <p>As a post-hoc analysis, we ran a one-tailed Mann-Whitney U Test. The result revealed that participants completed the tasks using bag of words perceived higher success in accomplishing the tasks than participants with simplification (U=76.5, z=2.31; p=.01) and concept annotation (U=97.5, z=2.02; p=.02). Concept bag of words users also perceived higher success than simplification (U=75.5, z=2.34; p=.009) and concept annotation users (U=103, z=1.85; p=.03).</p> 
      <p>As for the stress level, bag of words users reported significantly higher stress than perturbation (U=55, z=2.90; p=.002), concept bag of words (U=84.5, z=-2.24; p=.01), and concept annotation users (U=81.5, z=-2.34; p=.01).</p> 
     </section> 
    </section> 
    <section id="sec-16"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">6</span> Data scientists interview study</h2> 
      </div> 
     </header> 
     <p>To investigate what and how domain knowledge extracted from Ziva helps data scientists, we conducted an interview study with data scientists. We showed them <tt>concept</tt> and different <tt>justification</tt> results extracted by domain experts and asked them how they could use them in their ML development workflow.</p> 
     <p><strong>Study Protocol:</strong> Participants were given introduction to the project, prompts shown to domain experts and corresponding outputs of each part of the interface. Each interview was 1 hour long and driven by a questionnaire that posed questions related to compare domain knowledge extracted by domain experts using Ziva to their current practice. Finally, they were asked to rank usefulness of <tt>justification</tt> interface to their workflow.</p> 
     <p>We recruited 7 data scientists who have between 4 and 20 years of experience building models with domain experts in sophisticated domains, using the slack channels of an international technology company and word-of-mouth.</p> 
     <p><strong>Results:</strong> We re-ranked the scores on a linear scale, with a data scientist's favorite at 5 points, the second-most favorite at 4 and so on. If two techniques were tied for N-th rank, we averaged the scores for the both of techniques (e.g., if two techniques are 4th, they are given 1.5) As a result, the concept annotation technique scored the most (30), then concept bag of words and perturbation (22.5), simplification (17.5), and bag of words (12.5). Data scientists had several reasons why they prefer one <tt>justification</tt> technique to another and applications for different techniques. Through the metrics, we were able to identify the design requirements and important factors of domain-knowledge learning.</p> 
     <p><em>Standardized protocols</em>. As revealed in our preliminary interview and previous work&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0050">50</a>], there is no set protocol of communications or <em>common ground</em> between two parties, and expressed a need for a <em>protocol of communication with domain experts</em>. The steep learning curve of a specialized domain and lack of guidance for how to extract domain knowledge exacerbates the collaboration with domain experts. Three of interviewees said that having such a <tt>concept</tt> and examples upfront provided by domain experts has helped them to build a model in prior projects. One said, <em>“They describe what are the component information and examples. It was not very difficult to understand after reading the documents.”</em>In light of this, interviewees preferred <tt>justification</tt> techniques to inform them about the domain. For example, interviewees found concept annotation helpful because it is tightly connected with the <tt>concept</tt>, hence they can learn from examples how different components of the domain is expressed in the instances. Simplification is also helpful, as it is a simpler version of instances without rhetoric.</p> 
     <p>One interviewee suggested to use <tt>justification</tt> techniques to <em>explain</em> model decisions. They said, <em>“I work on active learning ML a lot. So I work with users. And so far all the interactions I expect for the user, fairly simple, either binary feedback – correct or incorrect. I have any incorporated explanation of when the user provide feedback. What's the explanation behind this feedback? I think that that would be very useful to generate some explanation or learn how to generate explanation.”</em>While model explanation is not the intended usage of the Ziva's <tt>justification</tt> techniques, the data scientist found the techniques helpful for debugging a model.</p> 
     <p><em>Scalability of domain knowledge</em>. Interviewees were also interested in how they would <em>scale</em> the Ziva output. Since they only received only 10 labeled instances and justification, it was too small for data scientists to train a model.</p> 
     <p>One application of Ziva output mentioned by data scientists is to label more instances by generalizing <tt>concept</tt> and <tt>justification</tt>, so called <em>weak-supervised learning</em>&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0062">62</a>]. One interviewee said, <em>“They are trying to give me guidance on how to propagate the labels. So one, the concept is going to be able to give me some notion on how to bucket my data, right, like, just in an unsupervised fashion.”</em></p> 
     <p>Interviewees stressed the importance of domain knowledge in <em>feature engineering</em>. During meetings with domain experts, they focus on identifying features for their model: <em>“I immediately start looking at what are the different features or abstractions of features that seem to be important to the domain expert.”</em> However, data scientists expressed the difficulty of feature ideation in building models in a specialized domain. Repeat meetings were required to go over many instances together in hope of covering the complete set of features. 3 of interviewees said they would use Ziva output to facilitate feature engineering by using the concepts created by domain experts as features. A participant explained: <em>“Vector that we can convert each restaurant record into a some feature vector.”</em> When it comes to the best <tt>justification</tt> techniques for feature engineering, one said <em>“The one with the highest resolution would be more beneficial for feature learning potentially because it allow me to generalize better”</em>. One data scientist suggested that they can propagate the feature across different components (e.g., food/food quality, service) of the domain expert's concepts using <em>distributional signature</em>&nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0013">13</a>]. For instance, in a restaurant domain, once they identified positive-sentiment words related to food, they can find similar sentiment of words related to service using the distribution of words.</p> 
     <p><em>Reduced burden on domain experts</em>. We also found data scientists were being mindful of domain experts’ cognitive load when they generated Ziva output, because domain experts were often busy. Another reason is if the eliciting <tt>justification</tt> is difficult, data scientists would not get a reliable result. One interviewee said: <em>“I would say there's also the question of what I think would be more easier for people, if it's difficult, then they're probably not going to do it very well. I wouldn't give it to them because I would think it's going to be more noisy.”</em></p> 
     <p><em>Elicitation and learning outcomes</em>. To demonstrate the feasibility of translating the Ziva output into useful features for model building, we constructed a real implementation. Inspired by a use case suggested by a data scientist in our study, we built 5 models for weak-supervised learning, mimicking a real-world cold start scenario with extremely limited labeling resources and no pre-trained model available. With such constraints, no one can expect state-of-the-art performance after a few training examples. Instead, a valuable characteristic at this early stage is intra-class consistency, demonstrating parallel improvement in precision and recall performance on various classes (here, positive and negative sentiment). This would suggest that the model is indeed learning something relevant to the entire task rather than guessing wildly, and hints at a good robustness that can be reliably improved upon with additional examples. We therefore worked with rule models, which are both consistent and explainable, relatively simple for a human to construct, and need very little labeled data to generate candidate rules. However, the interviewed data scientists agreed that at scale, the extracted elicitations could serve as features for a variety of learning models.</p> 
     <p>Excepting the bag of words condition, the models primarily focused on recognizing the semantic pattern of ‘Noun is [not] Adjective’. Of course, this can take several forms (‘food is good’, ‘good food’, ‘food is not bad’, etc.) We built rule-based models that extend a generic semantic role labeling model [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0006">6</a>] which can easily handle such variations. The generic model identifies all existing semantic roles, and the ten instances, annotated in each condition, are used to populate the dictionaries that those roles should match on (e.g., ‘food’ and ‘good’). In general, we were careful during model construction to not make any use of additional external knowledge (e.g., we do not know that ‘hot wings’ and ‘burgers’ are both a type of food, if this information was not in the output of Ziva.) Below we describe the details of each elicitation method and discuss the results, which are summarized in Table <a class="tbl" href="#tab4">4</a>:</p> 
     <div class="table-responsive" id="tab4"> 
      <div class="table-caption"> 
       <span class="table-number">Table 4:</span> 
       <span class="table-title">Performance of Rule-Based Models on 2,000 test instances, for different justification conditions on 10 training instances. Because the test dataset is balanced, the Recall (R) value is equivalent to Accuracy. The last three columns are the really meaningful ones, as they highlight the absolute differences in Precision/Recall/F1 between the two classes (lower is better; values below 0.10 are highlighted). The Trivial model, which always assigns a positive label to each instance, is shown for reference.</span> 
      </div> 
      <table class="table"> 
       <thead> 
        <tr> 
         <th style="text-align:left;"></th> 
         <th style="text-align:left;;border-bottom: 2pt solid #000000;" colspan="3"><strong>Positive Class</strong></th> 
         <th style="text-align:left;;border-bottom: 2pt solid #000000;" colspan="3"><strong>Negative Class</strong></th> 
         <th style="text-align:left;;border-bottom: 2pt solid #000000;" colspan="3"><strong>Delta Between Classes</strong></th> 
        </tr> 
       </thead> 
       <tbody> 
        <tr> 
         <td style="text-align:left;"></td> 
         <td style="text-align:left;"><strong>P</strong></td> 
         <td style="text-align:left;"><strong>R</strong></td> 
         <td style="text-align:left;"><strong>F</strong></td> 
         <td style="text-align:left;"><strong>P</strong></td> 
         <td style="text-align:left;"><strong>R</strong></td> 
         <td style="text-align:left;"><strong>F</strong></td> 
         <td style="text-align:left;"><strong>P</strong></td> 
         <td style="text-align:left;"><strong>R</strong></td> 
         <td style="text-align:left;"><strong>F</strong></td> 
        </tr> 
        <tr> 
         <td style="text-align:left;"><strong>Trivial (Always Pos)</strong></td> 
         <td style="text-align:left;"><em>0.5</em></td> 
         <td style="text-align:left;"><em>1.0</em></td> 
         <td style="text-align:left;"><em>0.667</em></td> 
         <td style="text-align:left;"><em>0.0</em></td> 
         <td style="text-align:left;"><em>0.0</em></td> 
         <td style="text-align:left;"><em>0.0</em></td> 
         <td style="text-align:left;">0.5</td> 
         <td style="text-align:left;">1.0</td> 
         <td style="text-align:left;">0.667</td> 
        </tr> 
        <tr> 
         <td style="text-align:left;"><strong>Bag of Words</strong></td> 
         <td style="text-align:left;">0.641</td> 
         <td style="text-align:left;">0.886</td> 
         <td style="text-align:left;">0.744</td> 
         <td style="text-align:left;">0.968</td> 
         <td style="text-align:left;">0.03</td> 
         <td style="text-align:left;">0.058</td> 
         <td style="text-align:left;">0.327</td> 
         <td style="text-align:left;">0.856</td> 
         <td style="text-align:left;">0.686</td> 
        </tr> 
        <tr> 
         <td style="text-align:left;"><strong>Perturbation</strong></td> 
         <td style="text-align:left;">0.768</td> 
         <td style="text-align:left;">0.076</td> 
         <td style="text-align:left;">0.138</td> 
         <td style="text-align:left;">0.891</td> 
         <td style="text-align:left;">0.041</td> 
         <td style="text-align:left;">0.078</td> 
         <td style="text-align:left;">0.123</td> 
         <td style="text-align:left;"><strong>0.035</strong></td> 
         <td style="text-align:left;"><strong>0.060</strong></td> 
        </tr> 
        <tr> 
         <td style="text-align:left;"><strong>Simplification</strong></td> 
         <td style="text-align:left;">0.775</td> 
         <td style="text-align:left;">0.069</td> 
         <td style="text-align:left;">0.127</td> 
         <td style="text-align:left;">0.857</td> 
         <td style="text-align:left;">0.030</td> 
         <td style="text-align:left;">0.058</td> 
         <td style="text-align:left;"><strong>0.082</strong></td> 
         <td style="text-align:left;"><strong>0.039</strong></td> 
         <td style="text-align:left;"><strong>0.069</strong></td> 
        </tr> 
        <tr> 
         <td style="text-align:left;"><strong>Concept Bag of Words</strong></td> 
         <td style="text-align:left;">0.735</td> 
         <td style="text-align:left;">0.219</td> 
         <td style="text-align:left;">0.337</td> 
         <td style="text-align:left;">0.836</td> 
         <td style="text-align:left;">0.102</td> 
         <td style="text-align:left;">0.182</td> 
         <td style="text-align:left;">0.101</td> 
         <td style="text-align:left;">0.117</td> 
         <td style="text-align:left;">0.155</td> 
        </tr> 
        <tr style="border-bottom: 2pt solid #000000;"> 
         <td style="text-align:left;"><strong>Concept Annotation</strong></td> 
         <td style="text-align:left;">0.723</td> 
         <td style="text-align:left;">0.245</td> 
         <td style="text-align:left;">0.366</td> 
         <td style="text-align:left;">0.806</td> 
         <td style="text-align:left;">0.112</td> 
         <td style="text-align:left;">0.197</td> 
         <td style="text-align:left;"><strong>0.083</strong></td> 
         <td style="text-align:left;">0.133</td> 
         <td style="text-align:left;">0.169</td> 
        </tr> 
       </tbody> 
      </table> 
     </div> 
     <p><strong>Bag of words.</strong> This was simple keyword matching on the terms identified in this condition. The positive terms output from this condition were mostly generic (‘amazing’, ‘delicious’) whereas many negative terms were very specific (‘over-hyped’,‘small quantities’). This is an artifact of both the domain (restaurant reviews) and the labels. The performance on the two classes reflects this: the positive class has pretty bad precision but great recall, as it severely over-generalizes, whereas the negative class has amazing precision but barely finds any examples, because it is so specific.</p> 
     <p><strong>Perturbation.</strong> The perturbed parts of the instances were treated as local training instances. All possible ‘Noun is Adjective’ signals were extracted from those instances to populate the relevant dictionaries. If a verb was negated, or an adjective transformed into an antonym (e.g., changing ‘delicious’ to ‘disgusting’ in ‘There were delicious burgers’, assigned a positive label), this meant that the topic (‘burgers’) is highly relevant, the original text (‘delicious burgers’) was a training example for the given label, and the perturbed result (‘disgusting burgers’) was for the opposite label.</p> 
     <p><strong>Simplification.</strong> The simplified instances were treated as high quality training instances. All possible ’Noun is Adjective’ signals were extracted from those instances to populate the relevant dictionaries. These signals did not overlap much in content, so the model could do little generalizing. Much like the perturbation condition, the recall for both classes is therefore extremely low, and the precision is respectable for only 10 training examples. Perturbation recall results are slightly better because each perturbed instance yields both a positive and a negative signal.</p> 
     <p><strong>Concept bag of words and Concept annotation</strong> The concept taxonomy described in Section <a class="sec" href="#sec-15">5.2</a> follows the ‘Noun is Adjective’ format by definition, so it was encoded accordingly for both of these conditions. The outputs of each condition were then used to extend the possible dictionaries. For <em>concept bag of words</em>, each annotation was added to both the ‘Noun’ and ‘Adjective’ dictionaries (whenever grammatically possible). For <em>concept annotation</em>, the ‘Noun’ and ‘Adjective’ elements were elicited separately, and thus were added to their respective dictionaries. It is unclear that either of these conditions is more successful than the other, at this stage. The recall is markedly better than for <em>simplification</em> and <em>perturbation</em> owing to the well-structured concept taxonomy, that lends itself well to generalization. But this comes at a price, as the delta in performance between the classes is similarly worse.</p> 
    </section> 
    <section id="sec-17"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">7</span> DISCUSSION</h2> 
      </div> 
     </header> 
     <p><strong>Capturing nuanced domain knowledge.</strong> While Ziva provides some basic components in a domain, data scientists pointed out there is information that the current design of Ziva does not reflect. For instance, domain experts provide insight about data, such as sparsity of a certain column. Data scientists find such information helpful, but it can not be captured in the Ziva output. More investigation is required on how to extract such nuanced knowledge. One possible direction is to leverage proposed documentation for data &nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0027">27</a>] or for models &nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0012">12</a>, <a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0051">51</a>]. Another tactic is to take a set of guided questions similar to the ones proposed in &nbsp;[<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#BibPLXBIB0066">66</a>] in discussions between domain experts and data scientists. Structure provided by such artifacts can facilitate domain knowledge transfer and get teams on the same page quickly.</p> 
     <p><strong>Re-evaluating the old normal: Bag of words.</strong> Bag of words is one of the dominant ways in the NLP domain to elicit signals. It appears to be most simple and straightforward task for domain experts. However, to our surprise, our work suggests otherwise. Participants in our user study indicated that bag of words is in fact more mentally demanding, harder to accomplish and more stressful for them than other <tt>justification</tt> techniques. Furthermore, in our exercise of building a rule-based model with different <tt>justification</tt> methods, the other methods outperformed the bag of words. This suggests that both domain experts and data scientists can benefit from our <tt>justification</tt> techniques during collaboration. We believe our <tt>justification</tt> method could be used throughout the ML development workflow and provide an outlet for stakeholders to efficiently communicate during model building.</p> 
     <p><strong>Limitations.</strong> Various use cases of the Ziva output validated the efficacy of our interfaces drawn from our preliminary study and literature review, demonstrating that domain experts’ elicited knowledge can facilitate model building. This paper only directly considers the concrete setting of a sentiment classifier for Yelp restaurant reviews. Nevertheless, the overall approach described in this paper is domain-agnostic, and extremely relevant to real-life scenarios with complex tasks, specialized domains, and significant constraints on the resources to generate large amounts of labeled data. Further, although only rule-based models were built, the semantic role-based features constructed from the output are quite appropriate as input to other learning approaches. Future work should examine the generalizability of the approach for other tasks (e.g., document classification, clustering, machine translation, and question answering), other domains (e.g., education, health science), and other learning models. We therefore believe we have identified a number of interesting design requirements of domain-knowledge sharing in the ML development workflow that are not currently addressed, and are applicable across tasks and domains.</p> 
    </section> 
    <section id="sec-18"> 
     <header> 
      <div class="title-info"> 
       <h2> <span class="section-number">8</span> CONCLUSION</h2> 
      </div> 
     </header> 
     <p>In this paper, we presented a system and a case study on how data scientists can get help from domain experts in the ML development lifecycle. Along the way, we identified the current practice of how data scientists acquire domain knowledge. Inspired by the existing workarounds, we designed an interface that facilitates the sharing of expert domain knowledge. We presented the interface output to ML practitioners to reflect their experience building an ML model in a specialized domain, from which we learned that scalability of a piece of domain knowledge and low cognitive load of domain experts are important factors for any domain knowledge-bootstrapping tool. We continued the work by investigating the cognitive load of different methods in our interface. We found that the traditional and most-used elicitation method “bag of words” is actually the least preferred by domain experts in terms of mental load and stress level, and provides the least knowledge scalability compared to other elicitation methods.</p> 
    </section> 
   </section> 
   <section class="back-matter"> 
    <section id="sec-19"> 
     <header> 
      <div class="title-info"> 
       <h2>ACKNOWLEDGMENTS</h2> 
      </div> 
     </header> 
     <p>We thank Dakuo Wang, David Karger and Ranit Aharonov for their feedback.</p> 
    </section> 
    <section id="ref-001"> 
     <header> 
      <div class="title-info"> 
       <h2 class="page-brake-head">REFERENCES</h2> 
      </div> 
     </header> 
     <ul class="bibUl"> 
      <li id="BibPLXBIB0001" label="[1]">2021. Appen. <a class="link-inline force-break" href="https://appen.com">https://appen.com</a>.</li> 
      <li id="BibPLXBIB0002" label="[2]">2021. Lean-Mean-Drag-and-Drop. <a class="link-inline force-break" href="https://supraniti.github.io/Lean-Mean-Drag-and-Drop/">https://supraniti.github.io/Lean-Mean-Drag-and-Drop/</a>.</li> 
      <li id="BibPLXBIB0003" label="[3]">2021. Yelp Open Dataset. <a class="link-inline force-break" href="https://www.yelp.com/dataset">https://www.yelp.com/dataset</a>.</li> 
      <li id="BibPLXBIB0004" label="[4]">Mark&nbsp;S Ackerman. 1998. Augmenting organizational memory: a field study of answer garden. <em><em>ACM Transactions on Information Systems (TOIS)</em></em> 16, 3 (1998), 203–224.</li> 
      <li id="BibPLXBIB0005" label="[5]">Mark&nbsp;S Ackerman, Juri Dachtera, Volkmar Pipek, and Volker Wulf. 2013. Sharing knowledge and expertise: The CSCW view of knowledge management. <em><em>Computer Supported Cooperative Work (CSCW)</em></em> 22, 4-6 (2013), 531–573.</li> 
      <li id="BibPLXBIB0006" label="[6]">A. Akbik and Yunyao Li. 2016. K-SRL: Instance-based Learning for Semantic Role Labeling. In <em>COLING</em>.</li> 
      <li id="BibPLXBIB0007" label="[7]">Moustafa Alzantot <em>et al.</em> 2018. Generating Natural Language Adversarial Examples. In <em>Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing</em>. Association for Computational Linguistics, 2890–2896. <a class="link-inline force-break" href="https://doi.org/10.18653/v1/D18-1316" target="_blank">https://doi.org/10.18653/v1/D18-1316</a></li> 
      <li id="BibPLXBIB0008" label="[8]">Saleema Amershi <em>et al.</em> 2019. Software engineering for machine learning: A case study. In <em>2019 IEEE/ACM 41st International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP)</em>. IEEE, 291–300.</li> 
      <li id="BibPLXBIB0009" label="[9]">Saleema Amershi, Maya Cakmak, William&nbsp;Bradley Knox, and Todd Kulesza. 2014. Power to the people: The role of humans in interactive machine learning. <em><em>Ai Magazine</em></em> 35, 4 (2014), 105–120.</li> 
      <li id="BibPLXBIB0010" label="[10]">Saleema Amershi, Max Chickering, Steven&nbsp;M Drucker, Bongshin Lee, Patrice Simard, and Jina Suh. 2015. Modeltracker: Redesigning performance analysis tools for machine learning. In <em>Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems</em>. 337–346.</li> 
      <li id="BibPLXBIB0011" label="[11]">David Andrzejewski, Xiaojin Zhu, and Mark Craven. 2009. Incorporating domain knowledge into topic modeling via Dirichlet forest priors. In <em>Proceedings of the 26th annual international conference on machine learning</em>. 25–32.</li> 
      <li id="BibPLXBIB0012" label="[12]">Matthew Arnold, Rachel&nbsp;KE Bellamy, Michael Hind, Stephanie Houde, Sameep Mehta, A Mojsilović, Ravi Nair, K&nbsp;Natesan Ramamurthy, Alexandra Olteanu, David Piorkowski, <em>et al.</em> 2019. FactSheets: Increasing trust in AI services through supplier's declarations of conformity. <em><em>IBM Journal of Research and Development</em></em> 63, 4/5 (2019), 6–1.</li> 
      <li id="BibPLXBIB0013" label="[13]">Yujia Bao, Menghua Wu, Shiyu Chang, and Regina Barzilay. 2019. Few-shot text classification with distributional signatures. <em><em>arXiv preprint arXiv:1908.06039</em></em>(2019).</li> 
      <li id="BibPLXBIB0014" label="[14]">Michael Brooks, Saleema Amershi, Bongshin Lee, Steven&nbsp;M Drucker, Ashish Kapoor, and Patrice Simard. 2015. FeatureInsight: Visual support for error-driven feature ideation in text classification. In <em>2015 IEEE Conference on Visual Analytics Science and Technology (VAST)</em>. IEEE, 105–112.</li> 
      <li id="BibPLXBIB0015" label="[15]">Carrie&nbsp;Jun Cai <em>et al.</em> 2019. Human-Centered Tools for Coping with Imperfect Algorithms during Medical Decision-Making. <a class="link-inline force-break" href="https://arxiv.org/abs/1902.02960">https://arxiv.org/abs/1902.02960</a></li> 
      <li id="BibPLXBIB0016" label="[16]">Carrie&nbsp;J Cai and Philip&nbsp;J Guo. 2019. Software Developers Learning Machine Learning: Motivations, Hurdles, and Desires. In <em>2019 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)</em>. IEEE, 25–34.</li> 
      <li id="BibPLXBIB0017" label="[17]">Carrie&nbsp;Jun Cai, Samantha Winter, David Steiner, Lauren Wilcox, and Michael Terry. 2019. ”Hello AI”: Uncovering the Onboarding Needs of Medical Practitioners for Human-AI Collaborative Decision-Making.</li> 
      <li id="BibPLXBIB0018" label="[18]">Maya Cakmak and Andrea&nbsp;L Thomaz. 2012. Designing robot learners that ask good questions. In <em>2012 7th ACM/IEEE International Conference on Human-Robot Interaction (HRI)</em>. IEEE, 17–24.</li> 
      <li id="BibPLXBIB0019" label="[19]">Ming-Wei Chang, Lev Ratinov, and Dan Roth. 2007. Guiding semi-supervision with constraint-driven learning. In <em>Proceedings of the 45th annual meeting of the association of computational linguistics</em>. 280–287.</li> 
      <li id="BibPLXBIB0020" label="[20]">Lydia&nbsp;B Chilton, Greg Little, Darren Edge, Daniel&nbsp;S Weld, and James&nbsp;A Landay. 2013. Cascade: Crowdsourcing taxonomy creation. In <em>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>. 1999–2008.</li> 
      <li id="BibPLXBIB0021" label="[21]">Jaegul Choo, Changhyun Lee, Chandan&nbsp;K Reddy, and Haesun Park. 2013. Utopian: User-driven topic modeling based on interactive nonnegative matrix factorization. <em><em>IEEE transactions on visualization and computer graphics</em></em> 19, 12(2013), 1992–2001.</li> 
      <li id="BibPLXBIB0022" label="[22]">Robert Culkin and Sanjiv&nbsp;R Das. 2017. Machine learning in finance: The case of deep learning for option pricing. <em><em>Journal of Investment Management</em></em> 15, 4 (2017), 92–100.</li> 
      <li id="BibPLXBIB0023" label="[23]">Mostafa Dehghani, Hamed Zamani, Aliaksei Severyn, Jaap Kamps, and W&nbsp;Bruce Croft. 2017. Neural ranking models with weak supervision. In <em>Proceedings of the 40th International ACM SIGIR Conference on Research and Development in Information Retrieval</em>. 65–74.</li> 
      <li id="BibPLXBIB0024" label="[24]">Gregory Druck, Burr Settles, and Andrew McCallum. 2009. Active learning by labeling features. In <em>Proceedings of the 2009 conference on Empirical methods in natural language processing</em>. 81–90.</li> 
      <li id="BibPLXBIB0025" label="[25]">Jerry&nbsp;Alan Fails and Dan&nbsp;R Olsen&nbsp;Jr. 2003. Interactive machine learning. In <em>Proceedings of the 8th international conference on Intelligent user interfaces</em>. 39–45.</li> 
      <li id="BibPLXBIB0026" label="[26]">James Fogarty, Desney Tan, Ashish Kapoor, and Simon Winder. 2008. CueFlik: interactive concept learning in image search. In <em>Proceedings of the sigchi conference on human factors in computing systems</em>. 29–38.</li> 
      <li id="BibPLXBIB0027" label="[27]">Timnit Gebru, Jamie Morgenstern, Briana Vecchione, Jennifer&nbsp;Wortman Vaughan, Hanna Wallach, Hal Daum&eacute;&nbsp;III, and Kate Crawford. 2018. Datasheets for datasets. <em><em>arXiv preprint arXiv:1803.09010</em></em>(2018).</li> 
      <li id="BibPLXBIB0028" label="[28]">Bhavya Ghai, Q&nbsp;Vera Liao, Yunfeng Zhang, Rachel Bellamy, and Klaus Mueller. 2020. Explainable Active Learning (XAL): An Empirical Study of How Local Explanations Impact Annotator Experience. <em><em>arXiv preprint arXiv:2001.09219</em></em>(2020).</li> 
      <li id="BibPLXBIB0029" label="[29]">Amirata Ghorbani, James Wexler, James&nbsp;Y Zou, and Been Kim. 2019. Towards automatic concept-based explanations. In <em>Advances in Neural Information Processing Systems</em>. 9273–9282.</li> 
      <li id="BibPLXBIB0030" label="[30]">Yaron Goldberg, Marilyn Safran, and Ehud Shapiro. 1992. Active mail—a framework for implementing groupware. In <em>Proceedings of the 1992 ACM conference on Computer-supported cooperative work</em>. 75–83.</li> 
      <li id="BibPLXBIB0031" label="[31]">Jonathan Grudin. 1988. Why CSCW applications fail: problems in the design and evaluationof organizational interfaces. In <em>Proceedings of the 1988 ACM conference on Computer-supported cooperative work</em>. 85–93.</li> 
      <li id="BibPLXBIB0032" label="[32]">Sandra&nbsp;G Hart and Lowell&nbsp;E Staveland. 1988. Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research. In <em>Advances in psychology</em>. Vol.&nbsp;52. Elsevier, 139–183.</li> 
      <li id="BibPLXBIB0033" label="[33]">Sven Hoffmann <em>et al.</em> 2019. Cyber-Physical Systems for Knowledge and Expertise Sharing in Manufacturing Contexts: Towards a Model Enabling Design. <em><em>Computer Supported Cooperative Work (CSCW)</em></em> 28, 3-4 (2019), 469–509.</li> 
      <li id="BibPLXBIB0034" label="[34]">Fred Hohman, Andrew Head, Rich Caruana, Robert DeLine, and Steven&nbsp;M Drucker. 2019. Gamut: A design probe to understand how data scientists understand machine learning models. In <em>Proceedings of the 2019 CHI conference on human factors in computing systems</em>. 1–13.</li> 
      <li id="BibPLXBIB0035" label="[35]">Fred Hohman, Minsuk Kahng, Robert Pienta, and Duen&nbsp;Horng Chau. 2018. Visual analytics in deep learning: An interrogative survey for the next frontiers. <em><em>IEEE transactions on visualization and computer graphics</em></em> 25, 8(2018), 2674–2693.</li> 
      <li id="BibPLXBIB0036" label="[36]">Andreas Holzinger. 2016. Interactive machine learning for health informatics: when do we need the human-in-the-loop?<em><em>Brain Informatics</em></em> 3, 2 (2016), 119–131.</li> 
      <li id="BibPLXBIB0037" label="[37]">Enamul Hoque and Giuseppe Carenini. 2015. Convisit: Interactive topic modeling for exploring asynchronous online conversations. In <em>Proceedings of the 20th International Conference on Intelligent User Interfaces</em>. 169–180.</li> 
      <li id="BibPLXBIB0038" label="[38]">Yuening Hu, Jordan Boyd-Graber, Brianna Satinoff, and Alison Smith. 2014. Interactive topic modeling. <em><em>Machine learning</em></em> 95, 3 (2014), 423–469.</li> 
      <li id="BibPLXBIB0039" label="[39]">Liu Jiang, Shixia Liu, and Changjian Chen. 2019. Recent research advances on interactive machine learning. <em><em>Journal of Visualization</em></em> 22, 2 (2019), 401–417.</li> 
      <li id="BibPLXBIB0040" label="[40]">Hongyan Jing. 2000. Sentence reduction for automatic text summarization. In <em>Proceedings of the sixth conference on Applied natural language processing</em>(<em>ANLC ’00</em>). Association for Computational Linguistics, 310–315. <a class="link-inline force-break" href="https://doi.org/10.3115/974147.974190" target="_blank">https://doi.org/10.3115/974147.974190</a></li> 
      <li id="BibPLXBIB0041" label="[41]">Ashish Kapoor, Bongshin Lee, Desney Tan, and Eric Horvitz. 2010. Interactive optimization for steering machine classification. In <em>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>. 1343–1352.</li> 
      <li id="BibPLXBIB0042" label="[42]">Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, Fernanda Viegas, <em>et al.</em> 2018. Interpretability beyond feature attribution: Quantitative testing with concept activation vectors (tcav). In <em>International conference on machine learning</em>. PMLR, 2668–2677.</li> 
      <li id="BibPLXBIB0043" label="[43]">Miryung Kim, Thomas Zimmermann, Robert DeLine, and Andrew Begel. 2016. The emerging role of data scientists on software development teams. In <em>Proceedings of the 38th International Conference on Software Engineering</em>. ACM, 96–107.</li> 
      <li id="BibPLXBIB0044" label="[44]">Josua Krause, Adam Perer, and Enrico Bertini. 2014. INFUSE: interactive feature selection for predictive modeling of high dimensional data. <em><em>IEEE transactions on visualization and computer graphics</em></em> 20, 12(2014), 1614–1623.</li> 
      <li id="BibPLXBIB0045" label="[45]">Rajasekar Krishnamurthy, Yunyao Li, Sriram Raghavan, Frederick Reiss, Shivakumar Vaithyanathan, and Huaiyu Zhu. 2009. SystemT: a system for declarative information extraction. <em><em>ACM SIGMOD Record</em></em> 37, 4 (2009), 7–13.</li> 
      <li id="BibPLXBIB0046" label="[46]">Todd Kulesza, Margaret Burnett, Weng-Keen Wong, and Simone Stumpf. 2015. Principles of explanatory debugging to personalize interactive machine learning. In <em>Proceedings of the 20th international conference on intelligent user interfaces</em>. 126–137.</li> 
      <li id="BibPLXBIB0047" label="[47]">Todd Kulesza, Denis Charles, Rich Caruana, Saleema&nbsp;Amin Amershi, and Danyel&nbsp;Aharon Fisher. 2019. Structured labeling to facilitate concept evolution in machine learning. US Patent 10,318,572.</li> 
      <li id="BibPLXBIB0048" label="[48]">David Laniado, Davide Eynard, Marco Colombetti, <em>et al.</em> 2007. Using WordNet to turn a folksonomy into a hierarchy of concepts. In <em>Semantic Web Application and Perspectives-Fourth Italian Semantic Web Workshop</em>. 192–201.</li> 
      <li id="BibPLXBIB0049" label="[49]">James Manyika, Michael Chui, Mehdi Miremadi, <em>et al.</em> 2017. A future that works: AI, automation, employment, and productivity. <em><em>McKinsey Global Institute Research, Tech. Rep</em></em> 60 (2017).</li> 
      <li id="BibPLXBIB0050" label="[50]">Yaoli Mao <em>et al.</em> 2019. How Data Scientists Work Together With Domain Experts in Scientific Collaborations: To Find The Right Answer Or To Ask The Right Question?<em><em>Proceedings of the ACM on Human-Computer Interaction</em></em> 3, GROUP(2019), 1–23.</li> 
      <li id="BibPLXBIB0051" label="[51]">Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa&nbsp;Deborah Raji, and Timnit Gebru. 2019. Model cards for model reporting. In <em>Proceedings of the conference on fairness, accountability, and transparency</em>. 220–229.</li> 
      <li id="BibPLXBIB0052" label="[52]">Thomas M&uuml;hlbacher, Lorenz Linhardt, Torsten M&ouml;ller, and Harald Piringer. 2017. Treepod: Sensitivity-aware selection of pareto-optimal decision trees. <em><em>IEEE transactions on visualization and computer graphics</em></em> 24, 1(2017), 174–183.</li> 
      <li id="BibPLXBIB0053" label="[53]">Michael Muller, Ingrid Lange, Dakuo Wang, David Piorkowski, Jason Tsay, Q.&nbsp;Vera Liao, Casey Dugan, and Thomas Erickson. 2019. How Data Science Workers Work with Data: Discovery, Capture, Curation, Design, Creation. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, UK) (CHI ’19). ACM, New York, NY, USA, Forthcoming.</li> 
      <li id="BibPLXBIB0054" label="[54]">Hiroki Nakayama <em>et al.</em> 2018. doccano: Text Annotation Tool for Human. <a class="link-inline force-break" href="https://github.com/doccano/doccano">https://github.com/doccano/doccano</a></li> 
      <li id="BibPLXBIB0055" label="[55]">Kevin&nbsp;K Nam and Mark&nbsp;S Ackerman. 2007. Arkose: reusing informal information from online discussions. In <em>Proceedings of the 2007 international ACM conference on Supporting group work</em>. 137–146.</li> 
      <li id="BibPLXBIB0056" label="[56]">Radu&nbsp;Stefan Niculescu, Tom&nbsp;M Mitchell, and R&nbsp;Bharat Rao. 2006. Bayesian network learning with parameter constraints. <em><em>Journal of machine learning research</em></em> 7, Jul (2006), 1357–1383.</li> 
      <li id="BibPLXBIB0057" label="[57]">Samir Passi and Steven&nbsp;J Jackson. 2018. Trust in data science: collaboration, translation, and accountability in corporate data science projects. <em><em>Proceedings of the ACM on Human-Computer Interaction</em></em> 2, CSCW(2018), 1–28.</li> 
      <li id="BibPLXBIB0058" label="[58]">Claudio Pinhanez. 2019. Machine Teaching by Domain Experts: Towards More Humane, Inclusive, and Intelligent Machine Learning Systems. <em><em>arXiv preprint arXiv:1908.08931</em></em>(2019).</li> 
      <li id="BibPLXBIB0059" label="[59]">David Piorkowski, Soya Park, April&nbsp;Yi Wang, Dakuo Wang, Michael Muller, and Felix Portnoy. 2021. How AI Developers Overcome Communication Challenges in a Multidisciplinary Team: A Case Study. arxiv:<a class="link-inline force-break" href="https://arXiv.org/abs/2101.06098">2101.06098</a>&nbsp;[cs.CY]</li> 
      <li id="BibPLXBIB0060" label="[60]">prodigy. 2018. prodigy. <a class="link-inline force-break" href="https://prodi.gy">https://prodi.gy</a>.</li> 
      <li id="BibPLXBIB0061" label="[61]">Hema Raghavan, Omid Madani, and Rosie Jones. 2006. Active learning with feedback on features and instances. <em><em>Journal of Machine Learning Research</em></em> 7, Aug (2006), 1655–1686.</li> 
      <li id="BibPLXBIB0062" label="[62]">Alex Ratner, Stephen Bach, Paroma Varma, and Chris R&eacute;. 2019. Weak supervision: the new programming paradigm for machine learning. <em><em>Hazy Research. Available via https://dawn. cs. stanford. edu//2017/07/16/weak-supervision/. Accessed</em></em>(2019), 05–09.</li> 
      <li id="BibPLXBIB0063" label="[63]">Alexander Ratner, Stephen&nbsp;H Bach, Henry Ehrenberg, Jason Fries, Sen Wu, and Christopher R&eacute;. 2017. Snorkel: Rapid training data creation with weak supervision. In <em>Proceedings of the VLDB Endowment. International Conference on Very Large Data Bases</em>, Vol.&nbsp;11. NIH Public Access, 269.</li> 
      <li id="BibPLXBIB0064" label="[64]">Alexander&nbsp;J Ratner, Christopher&nbsp;M De&nbsp;Sa, Sen Wu, Daniel Selsam, and Christopher R&eacute;. 2016. Data programming: Creating large training sets, quickly. In <em>Advances in neural information processing systems</em>. 3567–3575.</li> 
      <li id="BibPLXBIB0065" label="[65]">Adam Rule, Ian Drosos, Aur&eacute;lien Tabard, and James&nbsp;D Hollan. 2018. Aiding collaborative reuse of computational notebooks with annotated cell folding. <em><em>Proceedings of the ACM on Human-Computer Interaction</em></em> 2, CSCW(2018), 1–12.</li> 
      <li id="BibPLXBIB0066" label="[66]">Shems Saleh, William Boag, Lauren Erdman, and Tristan Naumann. 2020. Clinical Collabsheets: 53 Questions to Guide a Clinical Collaboration. In <em>Machine Learning for Healthcare Conference</em>. PMLR, 783–812.</li> 
      <li id="BibPLXBIB0067" label="[67]">A&nbsp;Th Schreiber, Guus Schreiber, Hans Akkermans, Anjo Anjewierden, Nigel Shadbolt, Robert de Hoog, Walter Van&nbsp;de Velde, Bob Wielinga, R Nigel, <em>et al.</em> 2000. <em>Knowledge engineering and management: the CommonKADS methodology</em>. MIT press.</li> 
      <li id="BibPLXBIB0068" label="[68]">Burr Settles. 2009. <em>Active learning literature survey</em>. Technical Report. University of Wisconsin-Madison Department of Computer Sciences.</li> 
      <li id="BibPLXBIB0069" label="[69]">Burr Settles. 2011. Closing the loop: Fast, interactive semi-supervised annotation with queries on features and instances. In <em>Proceedings of the 2011 Conference on Empirical Methods in Natural Language Processing</em>. 1467–1478.</li> 
      <li id="BibPLXBIB0070" label="[70]">Patrice&nbsp;Y Simard, Saleema Amershi, David&nbsp;M Chickering, Alicia&nbsp;Edelman Pelton, Soroush Ghorashi, Christopher Meek, Gonzalo Ramos, Jina Suh, Johan Verwey, <em>et al.</em> 2017. Machine teaching: A new paradigm for building machine learning systems. <em><em>arXiv preprint arXiv:1707.06742</em></em>(2017).</li> 
      <li id="BibPLXBIB0071" label="[71]">Alison Smith, Varun Kumar, Jordan Boyd-Graber, Kevin Seppi, and Leah Findlater. 2018. Closing the loop: User-centered design and evaluation of a human-in-the-loop topic modeling system. In <em>23rd International Conference on Intelligent User Interfaces</em>. 293–304.</li> 
      <li id="BibPLXBIB0072" label="[72]">Alison Smith-Renner, Varun Kumar, Jordan Boyd-Graber, Kevin Seppi, and Leah Findlater. 2020. Digging into user control: perceptions of adherence and instability in transparent models. In <em>Proceedings of the 25th International Conference on Intelligent User Interfaces</em>. 519–530.</li> 
      <li id="BibPLXBIB0073" label="[73]">Jake Snell, Kevin Swersky, and Richard Zemel. 2017. Prototypical networks for few-shot learning. In <em>Advances in neural information processing systems</em>. 4077–4087.</li> 
      <li id="BibPLXBIB0074" label="[74]">Simone Stumpf, Vidya Rajaram, Lida Li, Margaret Burnett, Thomas Dietterich, Erin Sullivan, Russell Drummond, and Jonathan Herlocker. 2007. Toward harnessing user feedback for machine learning. In <em>Proceedings of the 12th international conference on Intelligent user interfaces</em>. 82–91.</li> 
      <li id="BibPLXBIB0075" label="[75]">Justin Talbot, Bongshin Lee, Ashish Kapoor, and Desney&nbsp;S Tan. 2009. EnsembleMatrix: interactive visualization to support machine learning with multiple classifiers. In <em>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>. 1283–1292.</li> 
      <li id="BibPLXBIB0076" label="[76]">Loren&nbsp;G Terveen, Peter&nbsp;G Selfridge, and M&nbsp;David Long. 1995. Living design memory: framework, implementation, lessons learned. <em><em>Human-Computer Interaction</em></em> 10, 1 (1995), 1–37.</li> 
      <li id="BibPLXBIB0077" label="[77]">Rafaella Vale <em>et al.</em> 2020. An Assessment of Sentence Simplification Methods in Extractive Text Summarization. In <em>Proceedings of the ACM Symposium on Document Engineering 2020</em>(<em>DocEng ’20</em>). Association for Computing Machinery, Article 9, 9&nbsp;pages. <a class="link-inline force-break" href="https://doi.org/10.1145/3395027.3419588" target="_blank">https://doi.org/10.1145/3395027.3419588</a></li> 
      <li id="BibPLXBIB0078" label="[78]">April&nbsp;Yi Wang, Anant Mittal, Christopher Brooks, and Steve Oney. 2019. How Data Scientists Use Computational Notebooks for Real-Time Collaboration. <em><em>Proceedings of the ACM on Human-Computer Interaction</em></em> 3, CSCW(2019), 1–30.</li> 
      <li id="BibPLXBIB0079" label="[79]">Chengyu Wang, Xiaofeng He, and Aoying Zhou. 2017. A Short Survey on Taxonomy Learning from Text Corpora: Issues, Resources and Recent Advances. In <em>Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing</em>. Association for Computational Linguistics, 1190–1203. <a class="link-inline force-break" href="https://doi.org/10.18653/v1/D17-1123" target="_blank">https://doi.org/10.18653/v1/D17-1123</a></li> 
      <li id="BibPLXBIB0080" label="[80]">Malcolm Ware, Eibe Frank, Geoffrey Holmes, Mark Hall, and Ian&nbsp;H Witten. 2001. Interactive machine learning: letting users build classifiers. <em><em>International Journal of Human-Computer Studies</em></em> 55, 3 (2001), 281–292.</li> 
      <li id="BibPLXBIB0081" label="[81]">Tongshuang Wu, Daniel&nbsp;S Weld, and Jeffrey Heer. 2019. Local Decision Pitfalls in Interactive Machine Learning: An Investigation into Feature Selection in Sentiment Analysis. <em><em>ACM Transactions on Computer-Human Interaction (TOCHI)</em></em> 26, 4(2019), 1–27.</li> 
      <li id="BibPLXBIB0082" label="[82]">Chi-Lan Yang, Chien&nbsp;Wen Yuan, and Hao-Chuan Wang. 2019. When Knowledge Network is Social Network: Understanding Collaborative Knowledge Transfer in Workplace. <em><em>Proceedings of the ACM on Human-Computer Interaction</em></em> 3, CSCW(2019), 1–23.</li> 
      <li id="BibPLXBIB0083" label="[83]">Qian Yang, Aaron Steinfeld, and John Zimmerman. 2019. Unremarkable ai: Fitting intelligent decision support into critical, clinical decision-making processes. In <em>Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems</em>. 1–11.</li> 
      <li id="BibPLXBIB0084" label="[84]">Amy&nbsp;X Zhang, Michael Muller, and Dakuo Wang. 2020. How do Data Science Workers Collaborate? Roles, Workflows, and Tools. <em><em>arXiv preprint arXiv:2001.06684</em></em>(2020).</li> 
      <li id="BibPLXBIB0085" label="[85]">Hao Zhang <em>et al.</em> 2016. Learning Concept Taxonomies from Multi-modal Data. In <em>Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics</em>. Association for Computational Linguistics, 1791–1801. <a class="link-inline force-break" href="https://doi.org/10.18653/v1/P16-1169" target="_blank">https://doi.org/10.18653/v1/P16-1169</a></li> 
      <li id="BibPLXBIB0086" label="[86]">Jiawei Zhang, Yang Wang, Piero Molino, Lezhi Li, and David&nbsp;S Ebert. 2018. Manifold: A model-agnostic framework for interpretation and diagnosis of machine learning models. <em><em>IEEE transactions on visualization and computer graphics</em></em> 25, 1(2018), 364–373.</li> 
      <li id="BibPLXBIB0087" label="[87]">Xiang Zhang, Junbo Zhao, and Yann LeCun. 2015. Character-Level Convolutional Networks for Text Classification. arXiv:1509.01626 [cs] (Sept. 2015). arxiv:<a class="link-inline force-break" href="https://arXiv.org/abs/1509.01626">1509.01626</a>&nbsp;[cs]</li> 
      <li id="BibPLXBIB0088" label="[88]">Xiaomu Zhou, Mark Ackerman, and Kai Zheng. 2011. CPOE workarounds, boundary objects, and assemblages. In <em>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>. 3353–3362.</li> 
     </ul> 
    </section> 
   </section> 
   <section id="foot-001" class="footnote"> 
    <div class="bibStrip"> 
     <p>Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than the author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from <a href="mailto:permissions@acm.org">permissions@acm.org</a>.</p> 
     <p><em>IUI '21, April 14–17, 2021, College Station, TX, USA</em></p> 
     <p>&copy; 2021 Copyright held by the owner/author(s). Publication rights licensed to ACM.<br /> ACM ISBN 978-1-4503-8017-1/21/04…$15.00.<br />DOI: <a class="link-inline force-break" target="_blank" href="https://doi.org/10.1145/3397481.3450637">https://doi.org/10.1145/3397481.3450637</a> </p> 
    </div> 
   </section> 
  </main>`;

export default html_text;