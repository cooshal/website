webpackJsonp([0xdd281459f5b0],{571:function(e,o){e.exports={data:{markdownRemark:{html:'<p>Hawtio\'s Keycloak integration is provided through <a href="https://github.com/hawtio/hawtio-oauth">hawtio-oauth</a>.</p>\n<p>Those steps assume that you want your Hawtio console to be secured by <a href="https://www.keycloak.org">Keycloak</a>. Integration consists of 2 main steps:</p>\n<ol>\n<li>Prepare Keycloak server</li>\n<li>Deploy Hawtio to your favourite server (Spring Boot, WildFly, Karaf, Jetty, Tomcat, Red Hat Fuse, ...) and configure it to use Keycloak for authentication</li>\n</ol>\n<h2 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h2>\n<ul>\n<li><a href="#table-of-contents">Table of contents</a></li>\n<li><a href="#prepare-keycloak-server">Prepare Keycloak server</a></li>\n<li><a href="#apache-karaf-or-red-hat-fuse">Apache Karaf or Red Hat Fuse</a></li>\n<li><a href="#wildfly-or-jboss-eap">WildFly or JBoss EAP</a></li>\n<li><a href="#jetty">Jetty</a></li>\n<li><a href="#tomcat">Tomcat</a></li>\n</ul>\n<h2 id="prepare-keycloak-server"><a href="#prepare-keycloak-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepare Keycloak server</h2>\n<p>Install and run Keycloak server. The easiest way is to use <a href="https://hub.docker.com/r/jboss/keycloak/">Docker image</a>:</p>\n<pre><code class="language-bash">docker run -d -p 18080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin --name keycloak jboss/keycloak\n</code></pre>\n<p>Here we use port number <code>18080</code> for Keycloak server to avoid conflict with the default port number of most application servers.</p>\n<p>Import <a href="https://github.com/hawtio/hawtio-oauth/blob/master/test-plugins/hawtio-demo-realm.json">hawtio-demo-realm.json</a> into your Keycloak. To do that, go to the Keycloak admin console (<code>http://localhost:18080/auth/admin/</code>) and select "Add realm" and then select the JSON file. It creates <code>hawtio-demo</code> realm.</p>\n<p><code>hawtio-demo</code> realm has <code>hawtio-client</code> application installed as public client. There are a couple of realm roles like <code>admin</code> and <code>viewer</code>. Names of these roles are the same as default Hawtio roles, which are allowed to login into Hawtio admin console and to JMX.</p>\n<p>There are also 3 users:</p>\n<ul>\n<li><code>admin</code> with password <code>admin</code> and role <code>admin</code>, who is allowed to login into Hawtio</li>\n<li><code>viewer</code> with password <code>viewer</code> and role <code>viewer</code>, who is allowed to login into Hawtio</li>\n<li><code>jdoe</code> with password <code>password</code> and no role assigned, who is not allowed to login into Hawtio</li>\n</ul>\n<h2 id="apache-karaf-or-red-hat-fuse"><a href="#apache-karaf-or-red-hat-fuse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Apache Karaf or Red Hat Fuse</h2>\n<p>Assume <code>$KARAF_HOME</code> is the root directory of your Karaf/Fuse installation.</p>\n<p>Run Karaf/Fuse:</p>\n<pre><code class="language-bash">cd $KARAF_HOME/bin\n./karaf\n</code></pre>\n<p>Replace <code>./karaf</code> with <code>./fuse</code> if you are on Red Hat Fuse.</p>\n<p>Install Hawtio:</p>\n<pre><code class="language-bash">feature:add-repo hawtio 2.0-beta-2\nfeature:install hawtio\n</code></pre>\n<p>Install <a href="https://github.com/ops4j/org.ops4j.pax.keycloak">pax-keycloak</a>:</p>\n<pre><code class="language-bash">feature:add-repo pax-keycloak\nfeature:install pax-keycloak\n</code></pre>\n<p>This automatically generates <code>keycloak-hawtio.json</code>, <code>keycloak-bearer.json</code>, and <code>keycloak-direct-access.json</code> files under <code>$KARAF_HOME/etc/</code>. It also updates <code>$KARAF_HOME/etc/system.properties</code> with the following system properties:</p>\n<pre><code class="language-bash"># Hawtio / Keycloak integration\nhawtio.keycloakEnabled = true\nhawtio.roles = admin,manager,viewer\nhawtio.realm = karaf\nhawtio.keycloakClientConfig = file://${karaf.etc}/keycloak-hawtio.json\nhawtio.rolePrincipalClasses=org.keycloak.adapters.jaas.RolePrincipal,org.apache.karaf.jaas.boot.principal.RolePrincipal\n</code></pre>\n<p>Replace them with <code>keycloak-hawtio.json</code>, <code>keycloak-bearer.json</code>, and <code>keycloak-direct-access.json</code> in this example. File <code>keycloak-bearer.json</code> is currently used for adapters on server (JAAS Login module) side. File <code>keycloak-hawtio.json</code> is used on client (Hawtio JS application) side. File <code>keycloak-direct-access.json</code> is not used but the realm name needs to be updated.</p>\n<pre><code class="language-bash">cp examples/keycloak-integration/keycloak-hawtio.json $KARAF_HOME/etc/\ncp examples/keycloak-integration/keycloak-bearer.json $KARAF_HOME/etc/\ncp examples/keycloak-integration/keycloak-direct-access.json $KARAF_HOME/etc/\n</code></pre>\n<p>Restart Karaf/Fuse.</p>\n<p>Go to <code>https://localhost:8181/hawtio</code> and login to Keycloak as <code>admin</code> or <code>viewer</code> to see Hawtio admin console. If you login as <code>jdoe</code>, you should receive "forbidden" error in Hawtio.</p>\n<h2 id="wildfly-or-jboss-eap"><a href="#wildfly-or-jboss-eap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WildFly or JBoss EAP</h2>\n<p>Assume <code>$JBOSS_HOME</code> is the root directory of your WildFly/JBoss EAP installation and you deployed Hawtio WAR to it as described in <a href="/docs/get-started">Hawtio Get Started</a>.</p>\n<p>Install Keycloak adapter subsystem to your WildFly as described on the <a href="https://www.keycloak.org/docs/3.4/securing_apps/index.html#_jboss_adapter">Keycloak documentation</a>.</p>\n<p>Download and copy <code>keycloak-hawtio.json</code> and <code>keycloak-bearer.json</code> into WildFly. File <code>keycloak-bearer.json</code> is currently used for adapters on server (JAAS Login module) side. File <code>keycloak-hawtio.json</code> is used on client (Hawtio JS application) side.</p>\n<pre><code class="language-bash">cp examples/keycloak-integration/keycloak-hawtio.json $JBOSS_HOME/standalone/configuration/\ncp examples/keycloak-integration/keycloak-bearer.json $JBOSS_HOME/standalone/configuration/\n</code></pre>\n<p>In <code>$JBOSS_HOME/standalone/configuration/standalone.xml</code> configure system properties like this:</p>\n<pre><code class="language-xml">&#x3C;extensions>\n  ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n  &#x3C;property name="hawtio.authenticationEnabled" value="true" />\n  &#x3C;property name="hawtio.realm" value="hawtio" />\n  &#x3C;property name="hawtio.roles" value="admin,manager,viewer" />\n  &#x3C;property name="hawtio.rolePrincipalClasses" value="org.keycloak.adapters.jaas.RolePrincipal" />\n  &#x3C;property name="hawtio.keycloakEnabled" value="true" />\n  &#x3C;property name="hawtio.keycloakClientConfig" value="${jboss.server.config.dir}/keycloak-hawtio.json" />\n  &#x3C;property name="hawtio.keycloakServerConfig" value="${jboss.server.config.dir}/keycloak-bearer.json" />\n&#x3C;/system-properties>\n</code></pre>\n<p>Also add <code>hawtio</code> realm to this file in <code>&#x3C;security-domains></code> section:</p>\n<pre><code class="language-xml">&#x3C;security-domain name="hawtio" cache-type="default">\n  &#x3C;authentication>\n    &#x3C;login-module code="org.keycloak.adapters.jaas.BearerTokenLoginModule" flag="required">\n      &#x3C;module-option name="keycloak-config-file" value="${hawtio.keycloakServerConfig}"/>\n    &#x3C;/login-module>\n  &#x3C;/authentication>\n&#x3C;/security-domain>\n</code></pre>\n<p>Add the <code>&#x3C;secure-deployment></code> section to the <code>keycloak</code> subsystem in <code>$JBOSS_HOME/standalone/configuration/standalone.xml</code>. It should ensure that Hawtio WAR is able to find the JAAS login modules.</p>\n<pre><code class="language-xml">&#x3C;subsystem xmlns="urn:jboss:domain:keycloak:1.1">\n  &#x3C;secure-deployment name="hawtio.war">\n    &#x3C;resource>does-not-matter&#x3C;/resource>\n    &#x3C;auth-server-url>does-not-matter&#x3C;/auth-server-url>\n  &#x3C;/secure-deployment>\n&#x3C;/subsystem>\n</code></pre>\n<p>Run WildFly on port <code>8080</code> and go to <code>http://localhost:8080/hawtio</code>. Users are again <code>admin</code> and <code>viewer</code> with access and <code>jdoe</code> without access.</p>\n<h2 id="jetty"><a href="#jetty" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Jetty</h2>\n<p>Assume <code>$JETTY_HOME</code> is the root directory of your Jetty installation and you deployed Hawtio WAR to Jetty as described in <a href="/docs/get-started">Hawtio Get Started</a>.</p>\n<p>Install Keycloak Jetty adapter into your Jetty server as described on the <a href="https://www.keycloak.org/docs/3.4/securing_apps/index.html#_jetty9_adapter">Keycloak documentation</a>.</p>\n<p>Download and copy <code>keycloak-hawtio.json</code> and <code>keycloak-bearer.json</code> into Jetty. File <code>keycloak-bearer.json</code> is currently used for adapters on server (JAAS Login module) side. File <code>keycloak-hawtio.json</code> is used on client (Hawtio JS application) side.</p>\n<pre><code class="language-bash">cp examples/keycloak-integration/keycloak-hawtio.json $JETTY_HOME/etc/\ncp examples/keycloak-integration/keycloak-bearer.json $JETTY_HOME/etc/\n</code></pre>\n<p>Create file <code>$JETTY_HOME/etc/login.conf</code> with the content like this:</p>\n<pre><code class="language-bash">hawtio {\n    org.keycloak.adapters.jaas.BearerTokenLoginModule required\n        keycloak-config-file="${hawtio.keycloakServerConfig}";\n};\n</code></pre>\n<p>Export <code>JETTY_HOME</code> in your terminal. For example:</p>\n<pre><code class="language-bash">export JETTY_HOME=/mydir/jetty-distribution-9.x.x\n</code></pre>\n<p>Export <code>JAVA_OPTIONS</code> and add all necessary system properties similarly like this:</p>\n<pre><code class="language-bash">export JAVA_OPTIONS="-Dhawtio.authenticationEnabled=true \\\n                     -Dhawtio.realm=hawtio \\\n                     -Dhawtio.keycloakEnabled=true \\\n                     -Dhawtio.roles=admin,manager,viewer \\\n                     -Dhawtio.rolePrincipalClasses=org.keycloak.adapters.jaas.RolePrincipal \\\n                     -Dhawtio.keycloakClientConfig=$JETTY_HOME/etc/keycloak-hawtio.json \\\n                     -Dhawtio.keycloakServerConfig=$JETTY_HOME/etc/keycloak-bearer.json \\\n                     -Djava.security.auth.login.config=$JETTY_HOME/etc/login.conf"\n</code></pre>\n<p>Run Jetty and go to <code>http://localhost:8080/hawtio</code>. Users are again <code>admin</code> and <code>viewer</code> with access and <code>jdoe</code> without access.</p>\n<h2 id="tomcat"><a href="#tomcat" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tomcat</h2>\n<p>Instructions are quite similar to Jetty. You would need to setup JAAS realm and set the system properties. Just use Tomcat adapter instead of the Jetty one. Also you may need to add this system property (really empty value):</p>\n<pre><code class="language-bash">-Dhawtio.authenticationContainerDiscoveryClasses=\n</code></pre>\n<p>This is needed, so that Tomcat will use configured JAAS realm with <code>BearerTokenLoginModule</code> instead of <code>tomcat-users.xml</code> file, which Hawtio uses on Tomcat by default.</p>',frontmatter:{title:"Keycloak Integration Guide"}}},pathContext:{slug:"/docs/keycloak-integration/"}}}});
//# sourceMappingURL=path---docs-keycloak-integration-812b4aa1872bbcf2409e.js.map