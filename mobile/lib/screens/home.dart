import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Smart Society')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/visitor'),
              child: Text('Create Visitor Pass'),
            ),
            SizedBox(height: 12),
            ElevatedButton(
              onPressed: () {},
              child: Text('Scan Visitor QR'),
            ),
            SizedBox(height: 12),
            ElevatedButton(
              onPressed: () {},
              child: Text('Complaints'),
            )
          ],
        ),
      ),
    );
  }
}
