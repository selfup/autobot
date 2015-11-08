#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>


YunServer server;

void setup() {
  Serial.begin(9600);
  pinMode(13,OUTPUT);
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
}

void loop() {

  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW

}
