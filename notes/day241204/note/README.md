## res
![img.png](img.png)

## 会议聊天中的文本

```text

// XML-based Configuration Metadata

-- -- --

// XML-based Configuration Metadata

-- -- --

习惯：课前快速过一遍上次课的 commit 记录 ...

快速回顾，以便更好的衔接到今天的内容

-- -- --

Class.forName

-- -- --

day241204-spring-annotation

-- -- --

创建新 Module - spring-annotation

-- -- --

增加 Spring 核心依赖

-- -- --

在父模块中统一引入 Spring 核心依赖 ...

子模块都需要的依赖，可以写在父模块中
也是 DRY 的体现，到处都有这些底层思想

-- -- --

复制上一个 Module 的例子代码，不需要 beans.xml (error)

-- -- --

config.AppConfig

-- -- --

// Annotation-based Configuration Metadata
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);

-- -- --

Annotation-based Configuration Metadata

通过 @Configuration + @Bean 注解的方式向 Spring IoC 容器注册组件

@Configuration 注解的作用：相当于传统的 beans.xml 配置文件
@Bean 注解的作用：相当于 beans.xml 配置文件中的 bean 配置信息

-- -- --

com.example

-- -- --

改用 @ComponentScan + @Component 注解

-- -- --

用 @ComponentScan + @Component 注解的问题（error）...

当容器中有多个同类型的 BlogService 和 BlogRepository，程序无法精确选择

反向说明，Spring 在自动注入的过程中，默认是按类型从容器获取对象的

-- -- --

上一个问题的解法一：@Qualifier 按名称精确从容器中获取特定对象

-- -- --

上一个问题的解法一：@Qualifier 按名称精确从容器中获取特定对象

-- -- --

https://gitee.com/i-really-like-quietness/sb-detail

-- -- --

改用更具含义的别名注解 @Controller、@Service、@Repository ...

本质上它们都是 @Component，是 @Component 的别名而已

-- -- --

演示写法上更简单的 @Autowired 注解 ...

@Autowired 可以写在很多位置上，但是在这里例子中，@Autowired 写在了 Field，Spring 官方团队不太建议，不是不行，只是不建议

-- -- --

<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.11.3</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>6.2.0</version>
</dependency>

-- -- --

引入单元测试所需依赖

-- -- --

@SpringJUnitConfig(AppConfig.class)

-- -- --

@Autowired
ApplicationContext applicationContext;

-- -- --

增加 IoCTest

-- -- --

Assertions

-- -- --

单元测试快速体验，体会它跟 sout 的区别

-- -- --

测试 IoC 容器中存在名为 blogController 的对象

-- -- --

单元测试，增加 @DisplayName 注解

-- -- --

day241204-spring-aop

-- -- --

创建新 Module - spring-aop

-- -- --

@Repository

-- -- --

AppConfigTest

-- -- --

AOP: 准备基础代码

-- -- --

System.out.println("执行方法之前，记录当前用户的身份，操作时间等日志信息");


-- -- --

AOP: 模拟执行 save 方法之前，增加日志记录等前置处理

-- -- --

advice

-- -- --

DemoAdvice

-- -- --

@Aspect

-- -- --

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>6.2.0</version>
</dependency>

-- -- --

@Pointcut("execution(void com.example.dao.BlogRepositoryImpl.save())")
private void pt(){}

-- -- --

@EnableAspectJAutoProxy

-- -- --

AOP: 增加 spring-aspects 依赖，改用 Spring AOP 的方式实现 - @Before

-- -- --

AOP: 增加 spring-aspects 依赖，改用 Spring AOP 的方式实现 - @Before

-- -- --

https://gitee.com/i-really-like-quietness/sb-detail
```
