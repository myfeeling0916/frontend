import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MaterialApp(
      // home: new MyApp(),
      home: new FutureBuildDemo(),
    ));

class MyApp extends StatefulWidget {
  MyApp({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final String host = "https://jsonplaceholder.typicode.com/posts";
  List datas = [];
  @override
  void initState() {
    super.initState();
  }

  getData() {
    http.get(host).then((response) {
      setState(() {
        datas = jsonDecode(response.body);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    getData();
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Http+FutureBuilder'),
        ),
        body: ListView.builder(
          itemCount: datas.length,
          itemBuilder: (context, idx) {
            var data = datas[idx];
            return Card(
                child: Container(
              child: ListTile(
                title: Text(data['title']),
                subtitle: Text(data['body']),
              ),
            ));
          },
        ),
      ),
    );
  }
}

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
              var data = datas[idx];
              return Card(
                  child: Container(
                child: ListTile(
                  title: Text(data['title']),
                  subtitle: Text(data['body']),
                ),
              ));
            },
          );
        },
      ),
    );
  }
}
