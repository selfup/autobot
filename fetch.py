
import requests, json, time, sys

sys.path.insert(0, '/usr/lib/python2.7/bridge/')

from bridgeclient import BridgeClient as bridgeclient

endpoint_url = "some_url"

count  = 0

value = bridgeclient()

while (count < 100):
  r = requests.get(endpoint_url)

  teacher = r.json()['teacher']
  cohort = r.json()['cohort']

  print r.status_code
  print teacher
  print cohort

  value.put("teacher",(teacher))
  value.put("cohort",(cohort))

  time.sleep(10)
