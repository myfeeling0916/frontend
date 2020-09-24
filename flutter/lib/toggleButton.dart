import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: new MyApp(),
    ));

class MyApp extends StatefulWidget {
  MyApp({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<String> toggleItem = [
    '111',
    '222',
    '333',
    '444',
  ];
  List<bool> isSelected = [false, false, false, false];
  String selectText = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Toggle Buttons Example.'),
      ),
      body: Column(
        children: <Widget>[
          ToggleButtons(
            selectedColor: Colors.lightBlueAccent,
            children: List.generate(toggleItem.length, (index) {
              return Text(toggleItem[index]);
            }),
            isSelected: isSelected,
            onPressed: (index) {
              isSelected[index] = isSelected[index] ? false : true;
              selectText = '';
              for (int i = 0; i < toggleItem.length; i++) {
                if (isSelected[i]) selectText = '$selectText${toggleItem[i]},';
              }
              setState(() {});
            },
          ),
          SelectableText(selectText)
        ],
      ),
    );
  }
}
