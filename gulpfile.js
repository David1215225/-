//导入工具包
//本地安装gulp
var gulp = require("gulp"),
//css压缩插件
	cssnano = require("gulp-cssnano"),
//重命名
	rename = require("gulp-rename"),
//js压缩
	uglify = require("gulp-uglify"),
//sass插件
	sass = require("gulp-sass");
//设置任务
//css压缩、生成.min文件，并放入css文件夹下
gulp.task("styles",function(){
	return gulp.src("scss/*.scss")//编译sass
	.pipe(sass({outputStyle:'expanded'}))//输出方式
	.pipe(gulp.dest("css"))//保存未压缩文件至指定目录下
	.pipe(rename({"suffix" : ".min"}))//给文件添加.min后缀
	.pipe(cssnano())//压缩样式文件
	.pipe(gulp.dest("css"));//输出文件到指定目录
});
//js压缩
gulp.task("compressJs",function(){
	return gulp.src("js/*.js")
		.pipe(uglify())//js代码压缩
        .pipe(rename({"suffix" : ".min"}))
		.pipe(gulp.dest("js1"));//输出至js1文件夹中
});
//监听任务
gulp.task("watch",function(){
	gulp.watch("scss/*.scss",['styles']);
	gulp.watch("js/*.js",['compressJs']);
});
