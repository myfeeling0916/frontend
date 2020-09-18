import 'dart:math';

import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: new HomePage2(),
    ));

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: Text('App Demo'),
        ),
        body: Row(
          children: <Widget>[
            Container(
              color: Colors.red,
              width: 100.0,
              height: 100.0,
            ),
            Container(
              margin: EdgeInsets.only(left: 10.0),
              color: Colors.blue,
              width: 100.0,
              height: 100.0,
            ),
          ],
        ));
  }
}

class HomePage2 extends StatefulWidget {
  HomePage2({Key key}) : super(key: key);

  @override
  _HomePage2State createState() => _HomePage2State();
}

class _HomePage2State extends State<HomePage2> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: Text('Container demo')),
      body: TextField(
          decoration: new InputDecoration(
        icon: Icon(Icons.calendar_today),
        labelText: '日期',
        // suffix: Icon(Icons.remove),
        // suffixIcon: Icon(Icons.close),
        focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: Colors.green)),
        helperText: '輸入日期',
        hintText: '輸入日期2',
      )),
    );
  }
}
