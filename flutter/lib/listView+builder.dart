import 'dart:math';

import 'package:flutter/material.dart';

// listView+builder
void main() => runApp(MaterialApp(
      home: new HomePage2(),
    ));

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: Text('Card demo')),
      body: ListView(
        children: List.generate(
          10,
          (idx) {
            return Card(
              child: Container(
                height: 150,
                color: Colors.blueAccent,
                child: Text('$idx'),
              ),
            );
          },
        ),
      ),
    );
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
      appBar: new AppBar(title: Text('Card demo')),
      body: ListView.builder(
        itemCount: 10,
        itemBuilder: (context, idx) {
          return Card(
            child: Container(
              height: 150,
              color: Colors.blueAccent,
              child: Text('$idx'),
            ),
          );
        },
      ),
    );
  }
}
