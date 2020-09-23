import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

void main() => runApp(MaterialApp(
      home: new MyApp(),
    ));

class MyApp extends StatefulWidget {
  MyApp({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  VideoPlayerController _videoPlayerController;
  @override
  void initState() {
    super.initState();
    _videoPlayerController =
        VideoPlayerController.network('https://www.sample-videos.com/video312/mp4/720/big_buck_bunny_720p_30mb.mp4');
    _videoPlayerController.initialize().then((_) {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Video Demo'),
      ),
      body: _videoPlayerController.value.initialized
          ? AspectRatio(
              aspectRatio: _videoPlayerController.value.aspectRatio, child: VideoPlayer(_videoPlayerController))
          : Container(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.play_arrow),
        onPressed: () {
          setState(() {
            _videoPlayerController.play();
          });
        },
      ),
    );
  }
}
