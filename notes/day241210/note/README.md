## res
![img.png](img.png)

## 会议聊天中的文本

```text
MyInvocationHandler

-- -- --

void invoke(Method m);

-- -- --

LoggingHandler

-- -- --

target

-- -- --

 try{
                Method md = %s.class.getMethod("%s");
                h.invoke(md);
            }catch (Exception e){
                throw new RuntimeException(e);
            }

-- -- --

import java.lang.reflect.Method;

-- -- --

模拟 AOP - 动态代理 - 引出 MyInvocationHandler 进一步动态化

-- -- --

$Proxy1

-- -- --

模拟 AOP - 动态代理 - 修改动态生成的代理类类名 ...

其实它叫什么名称已经不重要了

-- -- --

模拟 AOP - 动态代理 - 动态设置代理类的包名和包路径

-- -- --

https://gitee.com/i-really-like-quietness/sb-detail

-- -- --

MyAnnotationConfigApplicationContext

-- -- --

AnnotationBasedMyIoCTest

-- -- --

Class configClass

-- -- --

模拟基于注解的 Spring IoC 容器 - 基础代码

-- -- --

private final Map<String, Object> beansMap = new HashMap<>();

-- -- --

annotation

-- -- --

MyConfiguration

-- -- --

模拟基于注解的 Spring IoC 容器 - 增加自定义注解

-- -- --

模拟基于注解的 Spring IoC 容器 - 参考 @Configuration 增加必要的元注解

-- -- --

模拟基于注解的 Spring IoC 容器 - 使用注解

-- -- --

private String getKeyName(Class<?> cls) {
        String className = cls.getName().replace(cls.getPackageName() + ".", "");
        //System.out.println(className);
        String key = className.substring(0, 1).toLowerCase() + className.substring(1);
        //System.out.println(key);
        return key;
    }

-- -- --

模拟基于注解的 Spring IoC 容器 - 解析特定注解之 @MyConfiguration

-- -- --

MyComponentScan

-- -- --

String value();

-- -- --

模拟基于注解的 Spring IoC 容器 - 增加并使用 @MyComponentScan 自定义注解

-- -- --

模拟基于注解的 Spring IoC 容器 - 解析 @MyComponentScan 注解

-- -- --

private List<Class<?>> scanPackage(String basePackage) {
        List<Class<?>> classes = new ArrayList<>();
        try {
            String path = basePackage.replace('.', '/');
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            
            Enumeration<URL> resources = classLoader.getResources(path);
            while (resources.hasMoreElements()) {
                URL resource = resources.nextElement();
                String protocol = resource.getProtocol();
                if ("file".equals(protocol)) {
                    File directory = new File(resource.getFile());
                    if (directory.exists()) {
                        scanDirectory(directory, basePackage, classes);
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to scan package: " + basePackage, e);
        }
        return classes;
    }

    private void scanDirectory(File directory, String basePackage, List<Class<?>> classes) {
        if (!directory.exists()) {
            return;
        }
        
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                String fileName = file.getName();
                if (file.isDirectory()) {
                    scanDirectory(file, basePackage + "." + fileName, classes);
                } else if (fileName.endsWith(".class")) {
                    try {
                        String className = basePackage + "." + fileName.substring(0, fileName.length() - 6);
                        Class<?> cls = Class.forName(className);
                        classes.add(cls);
                    } catch (ClassNotFoundException e) {
                        throw new RuntimeException("Failed to load class: " + fileName, e);
                    }
                }
            }
        }
    }

-- -- --

String basePackage = ((MyComponentScan) annotation).value();
                    System.out.println(basePackage);
                    List<Class<?>> classes = scanPackage(basePackage);
                    for (Class<?> cls : classes) {
                        System.out.println("Found class: " + cls.getName());
                    }

-- -- --

模拟基于注解的 Spring IoC 容器 - 根据 @MyComponentScan 注解中配置的包，扫描所有类

-- -- --

MyComponent

-- -- --

String value() default "";

-- -- --

模拟基于注解的 Spring IoC 容器 - 增加并使用 @MyComponent 自定义注解

-- -- --

if (cls.getAnnotation(MyComponent.class) != null) {
                            System.out.println("Found @MyComponent class: " + cls.getName());
                        }

-- -- --

模拟基于注解的 Spring IoC 容器 - 扫描标注了 @MyComponent 注解的类

-- -- --

Constructor<?>[] constructors = cls.getDeclaredConstructors();
                            if (constructors.length == 1 && constructors[0].getParameterCount() == 0) {
                                Object o = constructors[0].newInstance();
                                beansMap.put(getKeyName(cls), o);
                            }

-- -- --

模拟基于注解的 Spring IoC 容器 - 把标注了 @MyComponent 注解的类添加到容器

-- -- --

 else if (constructors.length == 1 && constructors[0].getParameterCount() == 1) {
                                Class<?> refType = constructors[0].getParameters()[0].getType();
                                Object refObj = beansMap.get(getKeyName(refType));
                                Object o = constructors[0].newInstance(refObj);
                                beansMap.put(getKeyName(cls), o);
                            } else {
                                throw new RuntimeException("暂时只支持自动处理「空参」和「单个参数」构造器的 Bean");
                            }

-- -- --

// 按类名排序（当前例子的解法之一，实际需要更严谨的处理）
                    classes.sort(Comparator.comparing(Class::getName));

-- -- --

bean3NeedBean2

-- -- --

模拟基于注解的 Spring IoC 容器 - 处理 Bean3 依赖 Bean2 的自动注入
```
