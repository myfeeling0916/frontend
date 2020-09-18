import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: new HomePage(),
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
