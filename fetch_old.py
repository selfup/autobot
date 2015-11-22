import requests, json, time, sys
sys.path.insert(0, '/usr/lib/python2.7/')
from bridge.bridgeclient import BridgeClient as bridgeclient
from requests.exceptions import ConnectionError

endpoint_url = "some_url"
count  = 0
value = bridgeclient()

while (count < 100):
  try:
    if (requests.get(endpoint_url).status_code) != 200:

      print "Server is Down"
      print "200 NOT OK :( "

      value.put("teacher",("Server is Down"))
      value.put("cohort",("200 NOT OK :( "))

      time.sleep(10)
    else:
      r = requests.get(endpoint_url)

      teacher = r.json()['teacher']
      cohort = r.json()['cohort']

      print r.status_code
      print teacher
      print cohort

      value.put("teacher",(teacher))
      value.put("cohort",(cohort))

      time.sleep(10)
  except ConnectionError as e:
      print "No Interwebz  "
      print "PANICMODE INIT"

      value.put("teacher",("No Interwebz  "))
      value.put("cohort",("PANICMODE INIT"))

      time.sleep(10)
