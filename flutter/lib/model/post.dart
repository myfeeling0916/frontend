import 'package:json_annotation/json_annotation.dart';

part 'post.g.dart';

// define data model.
@JsonSerializable()
class Post {
  int userId;
  int id;
  String title;
  String body;

  Post(this.userId, this.id, this.title, this.body);
  factory Post.fromJson(Map<String, dynamic> json) => _$PostFromJson(json);
  Map<String, dynamic> toJson() => _$PostToJson(this);
}
