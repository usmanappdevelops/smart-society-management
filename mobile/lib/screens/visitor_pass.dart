import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

class VisitorPassScreen extends StatefulWidget {
  @override
  State<VisitorPassScreen> createState() => _VisitorPassScreenState();
}

class _VisitorPassScreenState extends State<VisitorPassScreen> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController phoneController = TextEditingController();
  final TextEditingController purposeController = TextEditingController();
  String? passCode;

  void createPass() {
    setState(() {
      passCode = 'SS-${DateTime.now().millisecondsSinceEpoch}';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Create Visitor Pass')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            children: [
              TextField(controller: nameController, decoration: const InputDecoration(labelText: 'Visitor Name')),
              TextField(controller: phoneController, decoration: const InputDecoration(labelText: 'Visitor Phone')),
              TextField(controller: purposeController, decoration: const InputDecoration(labelText: 'Purpose')),
              const SizedBox(height: 12),
              ElevatedButton(onPressed: createPass, child: const Text('Create Pass')),
              const SizedBox(height: 20),
              if (passCode != null) ...[
                const Text('Pass Code'),
                Text(passCode!),
                const SizedBox(height: 12),
                QrImage(data: passCode!, version: QrVersions.auto, size: 220),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
