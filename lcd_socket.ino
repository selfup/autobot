#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>
#include <LiquidCrystal.h>
#include <HttpClient.h>

HttpClient client;
char data[10];
String response;
YunServer server;
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
  lcd.begin(16, 2);
}

void loop() {
  digitalWrite(13, LOW);
  delay(3000);
  digitalWrite(13, HIGH);
  delay(1000);

  char teacher[16];
  char cohort[16];

  Bridge.get("teacher", teacher, 16);
  Bridge.get("cohort", cohort, 16);

  delay(500);

  lcd.setCursor(0, 0);
  lcd.print(teacher);
  lcd.setCursor(0, 1);
  lcd.print(cohort);
}
