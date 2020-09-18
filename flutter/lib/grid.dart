import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: new HomePage2(),
    ));

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // debugPaintSizeEnabled = true;
    return Scaffold(
        appBar: new AppBar(title: Text('GridView demo')),
        body: GridView.count(
          crossAxisCount: 4,
          childAspectRatio: 2 / 3,
          children: List.generate(
              100,
              (idx) => Card(
                      child: Container(
                    width: 500,
                    height: 500,
                    color: Colors.green,
                    child: Center(
                      child: Text(
                        'index:$idx',
                      ),
                    ),
                  ))),
        ));
  }
}

class HomePage2 extends StatelessWidget {
  const HomePage2({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: Text('GridView demo')),
      body: GridView.builder(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: 100,
          childAspectRatio: 2 / 3,
        ), // SliverGridDelegateWithFixedCrossAxisCount(
        //   crossAxisCount: 2,
        //   childAspectRatio: 2 / 3,
        // ),
        itemBuilder: (context, idx) {
          return Card(
              child: Container(
            width: 500,
            height: 500,
            color: Colors.green,
            child: Center(
              child: Text(
                'index:$idx',
              ),
            ),
          ));
        },
      ),
    );
  }
}
