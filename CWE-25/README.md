# CWE-25: Path Traversal: '/../filedir'

### Summary
This allows attackers to traverse the file system to access files or directories that are outside of the restricted directory.

### Example Walkthrough
- Build and run the application
    - `docker build . --tag cwe-25`
    - `docker run -it -p 8080:8080 cwe-25`
- go to [localhost:8080/](localhost:8080/)
- go to [localhost:8080/?file=index.html](localhost:8080/?file=index.html)
    - You should see `CWE-25: Path Traversal`.
- go to [localhost:8080/?file=../app.js](localhost:8080/?file=../app.js)
    - You should the source code of the `app.js` file.
- go to [localhost:8080/?file=../../../etc/flag.txt](localhost:8080/?file=../../../etc/flag.txt)
    - You should `flag{...}`. If you succesfully see this then you traversed outside of the public directory and 

### Exercise
- Make modifications to the code to mitigate path traversal vulnerability.

### Mitigation
- Escape/Filter/Sanitize untrusted inputs.
- Add WAF rules to Block/Deny path traversal attempts.
- Set Root folder to ensure path traversal is not possible.
- Use SAST & DAST tools to scan application to ensure vulnerability does not exists.

### Further Reading
- [Path Traversal by synopsys](https://www.synopsys.com/glossary/what-is-path-traversal.html)
- [Path Traversal by OWASP](https://owasp.org/www-community/attacks/Path_Traversal)
- [Path disclosure vulnerability fixed in ExpressJS v4.11.1](https://expressjs.com/en/advanced/security-updates.html)
    - The vulnerability existed in the `send` package version `0.11.0`. [Fix](https://github.com/pillarjs/send/compare/0.11.0...0.11.1)
    - [Send Package on npmjs.com](https://www.npmjs.com/package/send/v/0.11.1)
    - [ExpressJS v4.11.1 change log](https://github.com/expressjs/express/compare/4.11.0...4.11.1)
<!-- EOF -->