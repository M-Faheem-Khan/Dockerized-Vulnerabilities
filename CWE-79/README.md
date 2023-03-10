# CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') 

### Summary
Cross-site Scripting(XSS) occurs when an untrusted input is rendered into the webpage during web page generation. An application which echos back "Hello {name}" is suseptiable to an XSS attack if the name field is not sanitized. Sanitizing an input means removing or replacing characters that may be used to exploit the application. For example: encoding or replace `"` character with `&quot;`. 

### Example Walkthrough
- Build and run the application
    - `docker build . --tag cwe-79`
    - `docker run -it -p 8080:8080 cwe-79`
- go to [localhost:8080/](localhost:8080/)
- go to [localhost:8080/?name=bob](localhost:8080/?name=bob)
    - You should see `Hi bob`.
- go to [localhost:8080/?name=<script>alert(1)</script>bob](localhost:8080/?name=<script>alert(1)</script>bob)
    - You should see an alert box with the value `1` and `Hi bob`.
    - What you have done is a Cross-site scripting attack. You have verified it works by executing Javascript.
    - How did it work?
        - In `app.js` - the `res.send()` send returns HTML `<p>Hi ${name}<p>` where the `${name}` is replaced with the input. So when we enter the server returns `<p>Hi bob<p>` and when we add the `<script>alert(1)</script>bob` the server returns `<p>Hi <script>alert(1)</script>bob<p>`. When the response is rendered the script is executed and we see the alert box.

### Exercise
- Make modifications to the code to mitigate cross-site scripting vulnerability.

### Mitigation
- Escape/Filter/Sanitize untrusted inputs.
- Set Content-Security-Policy header.
- Add WAF rules to Block/Deny XSS attempts.
- Explore and apply security defaults for your applications.
- Use Static Application Scaning Tool to scan for XSS vulnerabilities(Snyk, SonarQube, Github CodeQL etc.).
- Use Dynamic Application Scanning Tool to scan for XSS vulnerabilities.

### Further Reading
- [XSS Prevention for Express by semgrep](https://semgrep.dev/docs/cheat-sheets/express-xss/)
- [Cross Site Scripting Prevention Cheat Sheet by OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
<!-- EOF -->