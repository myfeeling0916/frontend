import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';

void main() => runApp(MaterialApp(
      // home: new MyApp(),
      home: new CachedNetworkImg(),
    ));

class CachedNetworkImg extends StatelessWidget {
  const CachedNetworkImg({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final String imgUrl =
        "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/10/Turtle-and-scuba-divers.jpg";
    return Scaffold(
        body: CachedNetworkImage(
      imageUrl: imgUrl,
      placeholder: (context, url) => new CircularProgressIndicator(),
      errorWidget: (context, url, error) => Icon(Icons.error),
    ));
  }
}
