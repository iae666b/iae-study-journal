## res
![img.png](img.png)

## 会议聊天中的文本

```text
fix: [WARNING] The artifact mysql:mysql-connector-java:jar has been relocated to com.mysql:mysql-connector-j:jar

-- -- --

refactor(user): 优化登录时的校验顺序，先校验验证码

-- -- --

test.ftl

-- -- --

https://freemarker.apache.org/

-- -- --

<dependency>
    <groupId>org.freemarker</groupId>
    <artifactId>freemarker</artifactId>
</dependency>

-- -- --

<dependency>
    <groupId>org.dom4j</groupId>
    <artifactId>dom4j</artifactId>
    <version>2.1.3</version>
</dependency>

<dependency>
    <groupId>jaxen</groupId>
    <artifactId>jaxen</artifactId>
    <version>1.2.0</version>
</dependency>

-- -- --

static String pomPath ="generator/pom.xml";

-- -- --

private static String readConfigurationFileFromPomXml() throws DocumentException {
    SAXReader saxReader = new SAXReader();
    HashMap<String, String> map = new HashMap<>();
    map.put("pom", "http://maven.apache.org/POM/4.0.0");
    saxReader.getDocumentFactory().setXPathNamespaceURIs(map);
    Document document = saxReader.read(pomPath);
    Node node = document.selectSingleNode("//pom:configurationFile");
    String configurationFile = node.getText();
    System.out.println("从 pom.xml 读取 mybatis-generator-maven-plugin 需要用到的 configurationFile=" + configurationFile);
    return configurationFile;
}

-- -- --

feat(generator): 从 pom.xml 读取 mybatis-generator 需要用到的持久层配置文件

-- -- --

feat(generator): 读取上一步获取到的配置文件，解析出表名和对应的实体名

-- -- --

Document document = new SAXReader().read("generator/" + configurationFile);
```