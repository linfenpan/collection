import 'dart:math';
import 'todo.dart';

void main() {
  // const bl = 1;
  // if (bl) { // dart 严格要求 boolean 的值
  //   print('如果是javascript，会打印这行内容');
  // } else {
  //   print('dart则打印这行内容');
  // }

  // const 声明后，就是不可变对象了
  // const map = {
  //   'age': 20,
  //   'p': 10,
  // };
  // map['age'] = 33;

  var arr = [];
  for (int i = 0; i < 5; i++) {
    arr.add(i);
    print('hello ${i + 1}');
  }
  print(arr.toString());

  final int r = getRandom();
  print('随机数:' + r.toString());

  printPeople();
  printChar(
    test: false
  );

  printFunction();
  printMetadata();
}

// 生成一个随机数
int getRandom() {
  return Random().nextInt(100);
}

class Person {
  // static const x = 1;  // 定义静态常亮
  String name;
  int age;

  Person(this.name, this.age);

  Person clone() {
    return new Person(name, age);
  }

  @override
  String toString() {
    Person person = this.clone();
    String pName = person.name;
    int pAge = person.age;
    return '名字:$pName 年龄:$pAge';
  }
}

// 用于混入测试（with功能）
class Skill {
  String skillName;
  // 箭头函数，也是支持的
  void setSkill(String skillName) => this.skillName = skillName;
  String getSkill() => this.skillName;
}

class Student extends Person with Skill {
  String school = '墨西哥';

  // Student(String name, int age, [String school]) : super(name, age) {
  //   this.school = school??this.school;  // 一般不推荐使用 this 的
  // }
  // 与上面的函数，是等价的
  Student(String name, int age, [this.school = '墨西哥']): super(name, age);
  
  // Student.sayHi() : super('', 0) {
  //   print('hi');
  // }

  // 下面演示两种静态方法的定义
  static sayHi() {
    print('hi');
  }
  // 这种定义，必须返回 Student 实例才行
  Student.clone([String name = '复制人', int age = 1, String school = '复制大学'])
    : school = school, super(name, age);

  @override
  String toString() {
    return super.toString() + ' 学校:$school';
  }
}

void printPeople() {
  Person person = new Person('黑熊', 50);
  print('person信息 -> $person');

  Student student1 = new Student('白熊1', 50, '大西洋');
  Student student2 = new Student('白熊2', 16);
  print('student1信息 -> $student1');
  print('student2信息 -> $student2');

  student1.setSkill('游泳');
  print('student的技能:' + student1.getSkill());

  Student student3 = Student.clone();
  print('student3信息 -> $student3');

  Student.sayHi();
}


void printChar({ bool test = true }) {
  var clapping = '\u{1f44f}';
  print(clapping);
  print(clapping.codeUnits);
  print(clapping.runes.toList());
  print('test变量: ${test}');
}


// 定义匿名函数的类型
typedef void Anonymous();

void printFunction() {
  // 箭头函数
  Function fnHello = () => print('hello');
  fnHello();

  List list = ['apple', 'orange', 'banana'];
  // 匿名函数
  list.forEach((value) {
    print('${list.indexOf(value)}: ${value}');
  });

  print('此函数是否匿名函数: ${fnHello is Anonymous}');
}


// 元数据测试
@todo('好人', '打印数据')
void printMetadata() {
  
}