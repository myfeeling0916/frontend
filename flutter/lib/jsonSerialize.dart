import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'model/post.dart';

void main() => runApp(MaterialApp(
      // home: new MyApp(),
      home: new FutureBuildDemo(),
    ));

class FutureBuildDemo extends StatefulWidget {
  FutureBuildDemo({Key key}) : super(key: key);

  @override
  _FutureBuildDemoState createState() => _FutureBuildDemoState();
}

class _FutureBuildDemoState extends State<FutureBuildDemo> {
  final String host = "https://jsonplaceholder.typicode.com/posts";
  List datas = [];
  @override
  void initState() {
    super.initState();
  }

  getData() {
    return http.get(host);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Http+FutureBuilder'),
      ),
      body: FutureBuilder(
        future: getData(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (!snapshot.hasData) {
            return Container();
          }

          List datas = jsonDecode(snapshot.data.body);

          return ListView.builder(
            itemCount: datas.length,
            itemBuilder: (context, idx) {
              Post data = Post.fromMap(datas[idx]);
              return Card(
                  child: Container(
                child: ListTile(
                  title: Text(data.title),
                  subtitle: Text(data.body),
                ),
              ));
            },
          );
        },
      ),
    );
  }
}
