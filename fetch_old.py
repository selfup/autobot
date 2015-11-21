mport requests, json, time, sys

sys.path.insert(0, '/usr/lib/python2.7/bridge/')

from bridgeclient import BridgeClient as bridgeclient

endpoint_url = "http://intelyzine.com/api/v1/classroom_as"

count  = 0

value = bridgeclient()

while (count < 100):
  if (requests.get(endpoint_url).status_code) != 200:

    print "No Interwebz  "
    print "Not 200 OK    "

    value.put("teacher",("No Interwebz  "))
    value.put("cohort",("Not 200 OK    "))

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
