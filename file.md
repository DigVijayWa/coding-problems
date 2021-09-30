<table style="width:600px;">
<tr>
<th>
API
</th>
<th>
Http error
</th>
<th>
<centre>
Code
</centre>
</th>
<th>
<centre>
Description
</centre>
</th>
</tr>

<tr>
<td>
<pre>
<br/><br/><br/><br/>All<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
400
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "InvalidToken",
        "message": "Invalid access token",
        "details": [],
        "target": "/v1/odm-draft/2.1.0-20201105095323/sap.odm.businesspartner.BusinessPartner/requests"
    }
}
</pre>
</td>

<td>
<pre>
<p>
Incorrect Authentication<br/>
Get new token (as old token has expired) <br/>
Client can’t do that, needs to be done in infrastructure on ABAP side<br/>
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>All<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
500
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "PersistenceFailure",
        "message": "Error while reading from persistency",
        "details": [],
        "target": "/v1/odm-draft/2.0.0-20200904072850/sap.odm.product.Product/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Internal server error when persistency not available 
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>All<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
503
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "ServiceCapacityReached",
        "message": "Service capacity reached. It cannot process further requests at the moment.",
        "details": [],
        "target": "/v1/odm-draft/2.0.0-20200904072850/sap.odm.product.Product/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Internal server error when parallel request limit exceeded <br/> 
Inform client that requests will be dropped <br/>
</p>
</pre>
</td>
</tr>




<tr>
<td>
<pre>
<br/><br/><br/><br/>All<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
404
</pre>
</td>
<td>
<pre>
<p>
  404 Not Found: Requested route <br/>
  ('one-mds.cfapps.sap.hana.ondemand.com') does not exist.<br/>
</p>
</pre>
</td>
<td>
<pre>
<p>
Incorrect ODM version 
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>All<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
404
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "IllegalEntity",
        "message": "Entity is illegal",
        "details": [],
        "target": "/v1/odm-draft/2.1.0-20201105095323/sap.odm.businesspartner.BusinessPartners/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Incorrect ODM version 
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>Change<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
400
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "InvalidRequest",
        "message": "Invalid Request",
        "details": [
            {
                "code": "InvalidRequest",
                "message": "Failed to decode object:\n"
            }
        ],
        "target": "/v1/odm-draft/2.1.0-20201105095323/sap.odm.businesspartner.BusinessPartner/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
MDI protocol violations <br/>
(stuff MDI doesn’t understand at all ; element not known, wrong syntax, tag misplaced, …)<br/>
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>Change<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
400
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "ValidationError",
        "message": "Validation error",
        "details": [
            {
                "code": "ValidationError",
                "message": "Value of element 'sap.onemds.test.TestObject.stringLimited'<br/> is expected to be a string of length 5"
            }
        ],
        "target": "/v1/odm-draft/1.0.2/sap.onemds.test.TestObject/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Some of the validation errors (rest via log API)<br/>
 – includes schema validation (against ODM, including mandatory fields)<br/>
</p>
</pre>
</td>
</tr>


<tr>
<td>
<pre>
<br/><br/><br/><br/>Change<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
503
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "ServiceCapacityReached",
        "message": "Service capacity reached. It cannot process further requests at the moment.",
        "details": [],
        "target": "/v1/odm-draft/2.0.0-20200904072850/sap.odm.product.Product/requests"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Internal server error when persistency full
</p>
</pre>
</td>
</tr>



<tr>
<td>
<pre>
<br/><br/><br/><br/>Log<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
409
</pre>
</td>
<td>
<pre>
json
  {
        code: "OutdatedDeltaToken",
        target: "",
        message: "Sent delta token was too old, initial load needed to retrieve states",
        details: [],
}
</pre>
</td>
<td>
<pre>
<p>
Invalid Delta Token <br/>
(after n days, MDI deletes outdated delta requests – not called MDI log API for 28 days)
</p>
</pre>
</td>
</tr>



<tr>
<td>
<pre>
<br/><br/><br/><br/>Log<br/><br/><br/><br/>
</pre>
</td>
<td>
<pre>
400
</pre>
</td>
<td>
<pre>
json
  {
    "error": {
        "code": "InvalidDeltaToken",
        "message": "Invalid delta token",
        "details": [],
        "target": "/v1/odm-draft/1.0.2/sap.onemds.test.TestObject/events"
    }
}
</pre>
</td>
<td>
<pre>
<p>
Incorrect delta tokens (token is for wrong entity, ODM versions, system credentials, …) 
</p>
</pre>
</td>
</tr>


</table>
