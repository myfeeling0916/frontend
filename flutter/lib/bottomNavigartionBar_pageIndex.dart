import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: new HomePage2(),
    ));

class HomePage extends StatelessWidget {
  int index = 0;
  @override
  Widget build(BuildContext context) {
    // debugPaintSizeEnabled = true;
    return Scaffold(
      appBar: new AppBar(title: Text('bottom navigation bar demo')),
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
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: index,
        onTap: (int index) {
          index = index;
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.add,
              color: Colors.black87,
            ),
            title: Text(
              'Add',
              style: TextStyle(
                color: Colors.black87,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.account_circle,
              color: Colors.black87,
            ),
            title: Text(
              'Account',
              style: TextStyle(
                color: Colors.black87,
              ),
            ),
          ),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.close,
                color: Colors.black87,
              ),
              title: Text(
                'Close',
                style: TextStyle(
                  color: Colors.black87,
                ),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.build,
                color: Colors.black87,
              ),
              title: Text(
                'Build',
                style: TextStyle(
                  color: Colors.black87,
                ),
              )),
        ],
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
  int index = 0;
  List<Widget> pages = [
    Container(
      color: Colors.red,
    ),
    Container(
      color: Colors.green,
    ),
    Container(
      color: Colors.amber,
    ),
    Container(
      color: Colors.black87,
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: Text('bottom navigation bar demo')),
      body: pages[index],
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: index,
        onTap: (int idx) {
          setState(() {
            index = idx;
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.add,
              color: Colors.black87,
            ),
            title: Text(
              'Add',
              style: TextStyle(
                color: Colors.black87,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.account_circle,
              color: Colors.black87,
            ),
            title: Text(
              'Account',
              style: TextStyle(
                color: Colors.black87,
              ),
            ),
          ),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.close,
                color: Colors.black87,
              ),
              title: Text(
                'Close',
                style: TextStyle(
                  color: Colors.black87,
                ),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.build,
                color: Colors.black87,
              ),
              title: Text(
                'Build',
                style: TextStyle(
                  color: Colors.black87,
                ),
              )),
        ],
      ),
    );
  }
}
