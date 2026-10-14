import 'package:flutter/material.dart';

void main() {
  runApp(const SmartSocietyApp());
}

class SmartSocietyApp extends StatelessWidget {
  const SmartSocietyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Smart Society',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/login',
      routes: {
        '/login': (context) => LoginScreen(),
        '/home': (context) => HomeScreen(),
        '/visitor': (context) => VisitorPassScreen(),
      },
    );
  }
}
