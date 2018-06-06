webpackJsonp([39068286934403],{579:function(e,a){e.exports={data:{markdownRemark:{html:'<p>Hawtio consists of 2 parts: an AngularJS applicaton and a Java backend, which proxies the communication between the frontend and <a href="https://jolokia.org/">Jolokia</a> endpoints. The frontend has access to all JMX attributes and operations available in Java applications running locally and remotely.</p>\n<p>Ways to run it:</p>\n<ul>\n<li>as a standalone <a href="#jar">executable jar</a></li>\n<li>deployed on a <a href="#servlet">Servlet container</a></li>\n<li>deployed on an <a href="#jee">application server</a></li>\n<li>deployed on an <a href="#osgi">OSGi container</a></li>\n<li>embedded <a href="#embedded">in a Java application</a></li>\n</ul>\n<p>The out of the box defaults try to do the right thing for most folks but if you want to configure things then please check out the <a href="../configuration/">configuration guide</a>.</p>\n<p><a id="jar"></a></p>\n<h2 id="running-the-executable-jar"><a href="#running-the-executable-jar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running the executable jar</h2>\n<p>You can startup hawtio on your machine using the hawtio-app executable jar.</p>\n<p><a class="btn btn-large btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-app/2.0.2/hawtio-app-2.0.2.jar">Download hawtio-app-2.0.2.jar</a></p>\n<p>Once you have downloaded it, just run this from the command line:</p>\n<pre><code>java -jar hawtio-app-2.0.2.jar\n</code></pre>\n<p>Note: If you launch hawt.io with Java 9, add the specified modules to avoid errors on startup and allow attaching to other Java processes:</p>\n<pre><code>java --add-modules jdk.attach,java.xml.bind -jar hawtio-app-2.0.2.jar\n</code></pre>\n<p>The console should show you which URL to open, which by default is <a href="http://localhost:8080/hawtio/">http://localhost:8080/hawtio/</a>.</p>\n<p>To set a different port number, run:</p>\n<pre><code>java -jar hawtio-app-2.0.2.jar --port 8090\n</code></pre>\n<p>To see the full list of configuration options, run:</p>\n<pre><code>java -jar hawtio-app-2.0.2.jar --help\n</code></pre>\n<p><a id="servlet"></a></p>\n<h2 id="deploying-on-a-servlet-container"><a href="#deploying-on-a-servlet-container" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploying on a Servlet container</h2>\n<p>If you use Tomcat or Jetty, you can deploy the Hawtio WAR file.</p>\n<div class="row">\n  <div class="col-md-4 text-center">\n    <p>\n      <a class="btn btn-primary" ref="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default/2.0.2/hawtio-default-2.0.2.war">Download hawtio-default.war</a>\n    </p>\n    <p>\n      A bare hawtio web application with minimal dependencies (online mode connecting to the internet for the Maven and Git plugin).\n    </p>\n  </div>\n  <div class="col-md-4 text-center">\n    <p>\n      <a class="btn btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default-offline/2.0.2/hawtio-default-offline-2.0.2.war">Download hawtio-default-offline.war</a>\n    </p>\n    <p>\n      A bare <b>offline</b> hawtio web application with minimal dependencies in offline mode, where Maven and Git plugins are not enabled.\n    </p>\n  </div>\n  <div class="col-md-4 text-center">\n    <p>\n      <a class="btn btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/sample/2.0.2/sample-2.0.2.war">Download sample.war</a>\n    </p>\n    <p>\n      A hawtio web application which comes with some <a href="http://activemq.apache.org/">Apache ActiveMQ</a> and\n      <a href="http://camel.apache.org/">Apache Camel</a> to play with.\n    </p>\n  </div>\n</div>\n<p>Please read the <a href="../configuration/">configuration guide</a> to see how to configure the console, in particular security.</p>\n<p>If you don\'t see a Tomcat / Jetty tab for your container you may need to enable JMX.</p>\n<p><a name="jee"></a></p>\n<h2 id="deploying-on-an-application-server"><a href="#deploying-on-an-application-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploying on an application server</h2>\n<p>If you don\'t use the WildFly application server, use one of the options from the <a href="#servlet">Servlet container</a> section to download Hawtio.</p>\n<p>If you do use WildFly, download <a href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-wildfly/2.0.2/hawtio-wildfly-2.0.2.war">hawtio-wildfly-2.0.2.war</a>.</p>\n<p>To enable security, you\'ll need to set up configuration like this:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="true" />\n    &#x3C;property name="hawtio.realm" value="jboss-web-policy" />\n    &#x3C;property name="hawtio.role" value="admin" />\n&#x3C;/system-properties>\n</code></pre>\n<p>You can follow the <a href="http://www.christianposta.com/blog/?p=403">steps outlined in this blog</a> for a more comprehensive\nlook at enabling security in WildFly with Hawtio.</p>\n<p>If you experience problems with security, you\'ll need to disable security in Hawtio. For WildFly, you can set the hawtio.authenticationEnabled system property in standalone/configuration/standalone.xml:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="false" />\n&#x3C;/system-properties>\n</code></pre>\n<p>For older JBoss AS releases (4,5 &#x26; 6) you can add the following configuration to your <strong>jboss-as/server/default/deploy/properties-service.xml</strong> file (which probably has the mbean definition already but commented out):</p>\n<pre><code>&#x3C;mbean code="org.jboss.varia.property.SystemPropertiesService"\n name="jboss:type=Service,name=SystemProperties">\n\n  &#x3C;attribute name="Properties">\n        hawtio.authenticationEnabled=false\n  &#x3C;/attribute>\n&#x3C;/mbean>\n</code></pre>\n<p>Learn how to <a href="http://www.mastertheboss.com/jboss-configuration/how-to-inject-system-properties-into-jboss">inject system properties into JBoss AS</a>.</p>\n<h2 id="using-apache-karaf"><a href="#using-apache-karaf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Apache Karaf</h2>\n<p>By default installing <code>hawtio</code> installs the Maven and Git plugin which uses online connection over the internet to work. You may want to install <code>hawtio-offline</code> instead which disables those plugins, and runs hawtio without any internet connectivity. When installing <code>hawtio-core</code> then those plugins are not installed and its also in offline mode.</p>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 2.x:</p>\n<pre><code>features:chooseurl hawtio 2.0.2\nfeatures:install hawtio\n</code></pre>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 3.x:</p>\n<pre><code>feature:repo-add hawtio 2.0.2\nfeature:install hawtio-core\n</code></pre>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 4.x:</p>\n<pre><code>feature:repo-add hawtio 2.0.2\nfeature:install hawtio\n</code></pre>\n<p><strong>NOTE</strong> Karaf 2.x/3.x has an issue with the <code>hawtio-log</code> which does not work. And therefore you need to install <code>hawtio-core</code> instead of <code>hawtio</code>.</p>\n<p>The hawtio console can then be viewed at <a href="http://localhost:8181/hawtio/">http://localhost:8181/hawtio/</a>.</p>\n<h3 id="if-you-use-a-http-proxy"><a href="#if-you-use-a-http-proxy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If you use a HTTP proxy</h3>\n<p>If you are behind a HTTP proxy, you\'ll need to enable HTTP proxy support in WildFly / Karaf to be able to download hawtio from the central maven repository.</p>\n<p>There are a few <a href="http://mpashworth.wordpress.com/2012/09/27/installing-apache-karaf-features-behind-a-firewall/">articles about</a> <a href="http://stackoverflow.com/questions/9922467/how-to-setup-a-proxy-for-apache-karaf">this</a> which may help. Here are the steps:</p>\n<p>Edit the <strong>etc/org.ops4j.pax.url.mvn.cfg</strong> file and make sure the following line is uncommented:</p>\n<pre><code>org.ops4j.pax.url.mvn.proxySupport=true\n</code></pre>\n<p>You may also want <strong>org.ops4j.pax.url.mvn.settings</strong> to point to your Maven settings.xml file. <strong>NOTE</strong> use / in the path, not .</p>\n<pre><code>org.ops4j.pax.url.mvn.settings=C:/Program Files/MyStuff/apache-maven-3.0.5/conf/settings.xml\n</code></pre>\n<p>WildFly / Karaf will then use your <a href="http://maven.apache.org/guides/mini/guide-proxies.html">maven HTTP proxy settings</a> from your <strong>~/.m2/settings.xml</strong> to connect to the maven repositories listed in <strong>etc/org.ops4j.pax.url.mvn.cfg</strong> to download artifacts.</p>\n<h3 id="enable-jmx-on-jetty-8x"><a href="#enable-jmx-on-jetty-8x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable JMX on Jetty 8.x</h3>\n<p>If you are using Jetty 8.x then JMX may not be enabled by default, so make sure the following line is not commented out in <strong>jetty-distribution/start.ini</strong> (you may have to uncomment it to enable JMX).</p>\n<pre><code>etc/jetty-jmx.xml\n</code></pre>\n<p><a name="embedded"></a></p>\n<h2 id="using-hawtio-embedded-in-a-java-application"><a href="#using-hawtio-embedded-in-a-java-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Hawtio embedded in a Java application</h2>\n<p>If you do not use a servlet container or application server and wish to embed Hawtio inside your Java application, try the following:</p>\n<p>Add the following to your pom.xml</p>\n<pre><code>&#x3C;dependency>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-embedded&#x3C;/artifactId>\n  &#x3C;version>${hawtio-version}&#x3C;/version>\n &#x3C;/dependency>\n</code></pre>\n<p>Then in your application run the following code:</p>\n<pre><code>import io.hawt.embedded.Main;\n\n...\nMain main = new Main();\nmain.setWar("somePathOrDirectoryContainingHawtioWar");\nmain.run();\n</code></pre>\n<p>If you wish to do anything fancy it should be easy to override the Main class to find the hawtio-web.war in whatever place you wish to locate it (such as your local maven repo or download it from some server etc).</p>\n<p>Depending on the war you are loading, you may also need to turn off authentication before running the embedded hawtio so that it can be accessible in an unauthenticated environment:</p>\n<pre><code>System.setProperty("hawtio.authenticationEnabled", "false");\n</code></pre>\n<h2 id="using-a-git-clone"><a href="#using-a-git-clone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a git clone</h2>\n<p>From a git clone you should be able to run Hawtio in a Spring Boot example application as follows:</p>\n<pre><code>git clone git@github.com:hawtio/hawtio.git\ncd hawtio/examples/springboot\nmvn spring-boot:run\n</code></pre>\n<p>Then opening <a href="http://localhost:10001/hawtio/">http://localhost:10001/hawtio/</a> should show Hawtio monitoring a sample web application that exposes information about Apache Camel routes, metrics, etc.</p>\n<p>A good MBean for real time values and charts is <code>java.lang/OperatingSystem</code>. Try looking at Camel routes. Notice that as you change selections in the tree the list of tabs available changes dynamically based on the content.</p>',frontmatter:{title:"Get Started"}}},pathContext:{slug:"/docs/get-started/"}}}});
//# sourceMappingURL=path---docs-get-started-b95315408494c87bc733.js.map