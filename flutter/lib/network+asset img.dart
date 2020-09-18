import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

void main() => runApp(MaterialApp(
      home: new HomePage(),
    ));

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);
  // https://infinitiliveaboard.com/public/images/index.html
  // final String bannerImg = "https://infinitiliveaboard.com/public/images/Banner-img-16.jpg";
  final String bannerImg = "";
  @override
  Widget build(BuildContext context) {
    debugPaintSizeEnabled = true;
    return Scaffold(
      appBar: new AppBar(title: Text('Card demo')),
      // body: Image.network(
      //   bannerImg,
      //   height: 200,
      //   alignment: Alignment.bottomCenter,
      //   fit: BoxFit.cover,
      // ),
      body: Image.asset(
        'lib/images/banner.jpg',
        height: 200,
        alignment: Alignment.bottomCenter,
        fit: BoxFit.cover,
      ),
    );
  }
}
