import 'dart:html';

import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      initialRoute: "/",
      routes: {
        "/": (context) {
          return MyApp();
        },
        "/page2": (context) {
          return Page2();
        },
      },
      // home: new MyApp(),
    ));

class MyApp extends StatefulWidget {
  MyApp({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('page1'),
        ),
        body: Container(
          color: Colors.red,
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // Navigator.pushNamed(context, '/page2');
            Navigator.of(context).push(MaterialPageRoute(builder: (context) {
              return Page2(textData: 'abcd');
            })).then((value) {
              print(value);
            });
          },
        ),
      ),
    );
  }
}

class Page2 extends StatelessWidget {
  final String textData;
  Page2({Key key, @required this.textData}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('page2'),
        ),
        body: SizedBox.expand(
          child: Container(
            color: Colors.green,
            child: Text(textData),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.pop(context, 'page result data.');
          },
        ),
      ),
    );
  }
}
