import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

class VisitorPassScreen extends StatefulWidget {
  @override
  _VisitorPassScreenState createState() => _VisitorPassScreenState();
}

class _VisitorPassScreenState extends State<VisitorPassScreen> {
  final _name = TextEditingController();
  final _phone = TextEditingController();
  final _purpose = TextEditingController();
  String? _passCode;

  void _createPass() {
    setState(() {
      _passCode = 'SS-' + DateTime.now().millisecondsSinceEpoch.toString();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Create Visitor Pass')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: SingleChildScrollView(
          child: Column(
            children: [
              TextField(controller: _name, decoration: InputDecoration(labelText: 'Visitor Name')),
              TextField(controller: _phone, decoration: InputDecoration(labelText: 'Visitor Phone')),
              TextField(controller: _purpose, decoration: InputDecoration(labelText: 'Purpose')),
              SizedBox(height: 12),
              ElevatedButton(onPressed: _createPass, child: Text('Create Pass')),
              SizedBox(height: 20),
              if (_passCode != null) ...[
                Text('Pass Code'),
                Text(_passCode!),
                SizedBox(height: 12),
                QrImage(data: _passCode!, version: QrVersions.auto, size: 220),
              ]
            ],
          ),
        ),
      ),
    );
  }
}
