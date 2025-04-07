// src/data/trainingModules.js
//trainingModules was a JS inferno *DONE*

const trainingModules = [
    {
      id: 1,
      title: 'Social Engineering',
      summary:
        'Social engineering involves manipulating individuals to divulge confidential information or perform actions that compromise security. Understanding these tactics helps you recognize and defend against deceptive practices used by cybercriminals. By mastering social engineering defenses, you enhance both personal and organizational security.',
      content:
        "Social engineering is a deceptive tactic used by cybercriminals to manipulate individuals into divulging confidential information or performing actions that compromise security. Unlike technical attacks, social engineering exploits human psychology, making it a potent threat in both personal and organizational contexts. Common techniques include phishing emails, pretexting, baiting, and tailgating, each designed to trick individuals into trusting the attacker. To defend against social engineering, it is essential to foster a culture of awareness and skepticism. Regular training sessions, verifying the identity of requesters, and implementing strict access controls are effective strategies. By understanding the motives and methods behind social engineering, users can recognize suspicious activities and respond appropriately, thereby safeguarding sensitive information and maintaining robust security protocols.",
      questions: [
        {
          question: 'What is the primary goal of social engineering?',
          options: [
            'To hack computer systems',
            'To manipulate people into giving up confidential information',
            'To create malware',
            'To break encryption',
          ],
          correctAnswer: 1,
          explanation:
            'Social engineering aims to manipulate people into giving up confidential information.',
        },
        {
          question: 'Which of the following is NOT a common social engineering tactic?',
          options: ['Phishing', 'Pretexting', 'Firewall bypassing', 'Baiting'],
          correctAnswer: 2,
          explanation:
            'Firewall bypassing is a technical attack, not a social engineering tactic.',
        },
        {
          question:
            'What should you do if you receive an unexpected email asking for sensitive information?',
          options: [
            'Reply immediately with the requested information',
            'Click on any links in the email to verify its authenticity',
            'Contact the supposed sender through a known, official channel to verify the request',
            'Forward the email to all your colleagues',
          ],
          correctAnswer: 2,
          explanation:
            'Always verify unexpected requests through official channels before responding.',
        },
        {
          question: 'What is "tailgating" in the context of social engineering?',
          options: [
            'Following someone closely while driving',
            'Sending repeated emails to a target',
            'Gaining unauthorized physical access by following someone into a restricted area',
            "Analyzing someone's social media posts",
          ],
          correctAnswer: 2,
          explanation:
            'Tailgating involves following someone into a restricted area without proper authorization.',
        },
        {
          question: 'Which of the following is the best defense against social engineering attacks?',
          options: [
            'Installing antivirus software',
            'Using a firewall',
            'Employee education and awareness',
            'Changing passwords frequently',
          ],
          correctAnswer: 2,
          explanation:
            'Employee education and awareness are crucial defenses against social engineering.',
        },
        {
          question: 'What is "pretexting" in social engineering?',
          options: [
            'Creating a fake scenario to obtain information',
            'Sending unsolicited emails',
            'Using malware to access data',
            'Disguising as a trusted entity',
          ],
          correctAnswer: 0,
          explanation:
            'Pretexting involves creating a fabricated scenario to obtain confidential information.',
        },
        {
          question: 'Why are humans often considered the weakest link in security?',
          options: [
            'They are prone to making technical errors',
            'They can be easily manipulated through social engineering',
            'They have limited access to resources',
            'They cannot be trained',
          ],
          correctAnswer: 1,
          explanation:
            'Humans can be easily manipulated through social engineering, making them a weak link.',
        },
        {
          question: 'Which of the following can help prevent social engineering attacks?',
          options: [
            'Regular software updates',
            'Strong firewalls',
            'Multi-factor authentication',
            'All of the above',
          ],
          correctAnswer: 3,
          explanation:
            'All listed measures can help prevent or mitigate social engineering attacks.',
        },
        {
          question: 'What should you do if you suspect a social engineering attempt?',
          options: [
            'Ignore it and continue working',
            'Confront the attacker directly',
            'Report it to your security team',
            'Share it on social media',
          ],
          correctAnswer: 2,
          explanation:
            'Reporting suspected social engineering attempts to your security team is the best course of action.',
        },
        {
          question: 'How can verifying the identity of a requester help prevent social engineering?',
          options: [
            'It slows down the process',
            'It ensures that only authorized individuals have access',
            'It confuses the attacker',
            'It allows for better record-keeping',
          ],
          correctAnswer: 1,
          explanation:
            'Verifying identities ensures that only authorized individuals have access to sensitive information.',
        },
      ],
    },
    {
      id: 2,
      title: 'Secure Browsing',
      summary:
        'Secure browsing encompasses practices that protect your online activities and personal information from cyber threats. By adopting safe browsing habits, you would significantly reduce the risk of data breaches and maintain your privacy on the internet. Mastering secure browsing ensures a safer and more confident online experience.',
      content:
        'Secure browsing encompasses a set of practices aimed at protecting your online activities from various cyber threats, ensuring privacy, and maintaining the integrity of your data. Utilizing HTTPS ensures that data transmitted between your browser and websites is encrypted, preventing eavesdropping and tampering. Employing a Virtual Private Network (VPN) adds an extra layer of security, especially on public Wi-Fi networks, by masking your IP address and encrypting your internet traffic. Keeping your browser and its extensions up-to-date is crucial to patch vulnerabilities that could be exploited by attackers. Additionally, using reputable password managers helps in creating and managing strong, unique passwords for different accounts, reducing the risk of credential theft. Being vigilant against phishing attempts and avoiding the sharing of sensitive information on unsecured platforms are also key components of secure browsing. By adhering to these best practices, users can navigate the internet safely, protecting their digital footprint and personal information from potential threats.',
      questions: [
        {
          question: 'What does HTTPS stand for?',
          options: [
            'Hyper Text Transfer Protocol Secure',
            'Highly Trusted Transfer Protocol System',
            'Hyper Transfer Text Protocol Security',
            'Home Transfer Text Protocol Service',
          ],
          correctAnswer: 0,
          explanation:
            'HTTPS stands for Hyper Text Transfer Protocol Secure, indicating a secure connection.',
        },
        {
          question: 'Which of these is NOT a recommended secure browsing practice?',
          options: [
            'Using a VPN on public Wi-Fi',
            'Keeping your browser updated',
            'Sharing your passwords with trusted friends',
            'Using a password manager',
          ],
          correctAnswer: 2,
          explanation:
            'Sharing passwords is not recommended; passwords should remain confidential.',
        },
        {
          question: 'What is the primary purpose of a VPN when browsing?',
          options: [
            'To speed up your internet connection',
            'To block all ads',
            'To encrypt your internet traffic and hide your IP address',
            'To automatically update your software',
          ],
          correctAnswer: 2,
          explanation:
            'A VPN encrypts your traffic and hides your IP address for secure browsing.',
        },
        {
          question: 'What should you do before entering sensitive information on a website?',
          options: [
            "Clear your browser history",
            "Verify that the URL begins with 'https://'",
            'Disable your antivirus',
            'Switch to incognito mode',
          ],
          correctAnswer: 1,
          explanation:
            "Ensure the website uses HTTPS to secure your data during transmission.",
        },
        {
          question: 'Which of the following is a sign that a website might not be secure?',
          options: [
            'It has a privacy policy',
            'It uses HTTPS',
            "It has a padlock icon in the address bar",
            "It has a URL starting with 'http://' instead of 'https://'",
          ],
          correctAnswer: 3,
          explanation:
            "Websites starting with 'http://' are not secure; 'https://' indicates a secure connection.",
        },
        {
          question: 'Why is it important to keep your browser updated?',
          options: [
            'To access new features',
            'To ensure compatibility with websites',
            'To protect against security vulnerabilities',
            'All of the above',
          ],
          correctAnswer: 3,
          explanation:
            'Updating your browser ensures access to new features, compatibility, and protection against security vulnerabilities.',
        },
        {
          question: 'What is phishing?',
          options: [
            'A technique to steal personal information by masquerading as a trustworthy entity',
            'A method to increase internet speed',
            'A type of malware that encrypts files',
            'A secure browsing protocol',
          ],
          correctAnswer: 0,
          explanation:
            'Phishing involves tricking individuals into providing sensitive information by pretending to be a trustworthy entity.',
        },
        {
          question: 'How does a password manager enhance your online security?',
          options: [
            'It generates strong, unique passwords for each account',
            'It stores all your passwords securely',
            'It reduces the need to remember multiple passwords',
            'All of the above',
          ],
          correctAnswer: 3,
          explanation:
            'Password managers generate, store, and manage strong, unique passwords, enhancing overall security.',
        },
        {
          question: 'What should you avoid when using public Wi-Fi?',
          options: [
            'Accessing sensitive accounts',
            'Browsing casual websites',
            'Using a VPN',
            'Checking emails',
          ],
          correctAnswer: 0,
          explanation:
            'Avoid accessing sensitive accounts over public Wi-Fi as it can be insecure and susceptible to attacks.',
        },
        {
          question: 'What is a potential risk of using outdated browser extensions?',
          options: [
            'They may slow down your browser',
            'They can introduce security vulnerabilities',
            'They might display unwanted ads',
            'They can consume excessive memory',
          ],
          correctAnswer: 1,
          explanation:
            'Outdated browser extensions can have security vulnerabilities that attackers might exploit.',
        },
      ],
    },
    {
      id: 3,
      title: 'Password Management',
      summary:
        'Effective password management is essential for safeguarding your online accounts and sensitive information. Creating strong, unique passwords and using password managers can significantly reduce the risk of unauthorized access. By implementing good password practices, you ensure enhanced security for your digital life.',
      content:
        'Effective password management is fundamental to securing online accounts and protecting sensitive information from unauthorized access. Creating strong, unique passwords for each account significantly reduces the risk of credential stuffing and brute-force attacks. A robust password typically includes a combination of uppercase and lowercase letters, numbers, and special characters, and is at least 12 characters long. Avoiding the use of easily guessable information, such as birthdays or common words, further enhances password strength. Implementing two-factor authentication (2FA) adds an additional layer of security by requiring a second form of verification, making it harder for attackers to gain access even if passwords are compromised. Utilizing reputable password managers not only helps in generating and storing complex passwords securely but also simplifies the management process, eliminating the need to remember multiple credentials. Regularly updating passwords and monitoring account activity are proactive measures that contribute to maintaining robust security. By adopting these best practices, users can effectively safeguard their digital identities and minimize the risk of cyber threats.',
      questions: [
        {
          question: 'Which of the following is considered the strongest password?',
          options: [
            'password123',
            'MyDogSpot2015!',
            'P@ssw0rd',
            'xT9#mK2$pL7&fQ',
          ],
          correctAnswer: 3,
          explanation:
            'A random combination of characters like "xT9#mK2$pL7&fQ" is strongest.',
        },
        {
          question: 'What is a recommended practice for password management?',
          options: [
            'Use the same password for all accounts',
            'Write down passwords in a notebook',
            'Use a reputable password manager',
            'Change passwords every day',
          ],
          correctAnswer: 2,
          explanation:
            'Using a reputable password manager helps securely store and manage passwords.',
        },
        {
          question: 'What is the minimum recommended length for a strong password?',
          options: ['8 characters', '10 characters', '12 characters', '16 characters'],
          correctAnswer: 2,
          explanation:
            'A minimum of 12 characters is recommended for strong passwords.',
        },
        {
          question: 'Which of the following should you avoid when creating a password?',
          options: [
            'Using a mix of uppercase and lowercase letters',
            'Including numbers and symbols',
            'Making it at least 12 characters long',
            'Using personal information like birthdays or names',
          ],
          correctAnswer: 3,
          explanation:
            'Avoid using personal information, as it can be easily guessed.',
        },
        {
          question: 'What is two-factor authentication (2FA)?',
          options: [
            'Using two different passwords for the same account',
            'A method that requires two different forms of identification to access an account',
            'Changing your password twice a year',
            'Using a password manager',
          ],
          correctAnswer: 1,
          explanation:
            '2FA requires two forms of verification, enhancing account security.',
        },
        {
          question: 'Why should you avoid using common words in your password?',
          options: [
            'They are harder to remember',
            'They are easier to guess or crack',
            'They take up more space',
            'They are not supported by all systems',
          ],
          correctAnswer: 1,
          explanation:
            'Common words can be easily guessed or cracked using dictionary attacks.',
        },
        {
          question: 'What does it mean to use a "unique" password?',
          options: [
            'Using a password that is memorable',
            'Using the same password for multiple accounts',
            'Using a different password for each account',
            'Using a password with at least one number',
          ],
          correctAnswer: 2,
          explanation:
            'A unique password means using a different password for each account to prevent a breach in one from affecting others.',
        },
        {
          question: 'How can a password manager help you?',
          options: [
            'Automatically logging you into websites',
            'Generating strong, unique passwords',
            'Storing your passwords securely',
            'All of the above',
          ],
          correctAnswer: 3,
          explanation:
            'Password managers can generate, store, and autofill strong, unique passwords for your accounts.',
        },
        {
          question: 'What is a passphrase?',
          options: [
            'A single word used as a password',
            'A sequence of words used together as a password',
            'A combination of letters and numbers',
            'A password that changes every day',
          ],
          correctAnswer: 1,
          explanation:
            'A passphrase is a sequence of words used together as a password, often making it longer and more secure.',
        },
        {
          question: 'Why is it important to change your passwords regularly?',
          options: [
            'To keep your accounts fresh',
            'To prevent unauthorized access from compromised credentials',
            'To confuse attackers',
            'To comply with software updates',
          ],
          correctAnswer: 1,
          explanation:
            'Regularly changing passwords helps prevent unauthorized access if credentials are compromised.',
        },
      ],
    },
  ];
  
  export default trainingModules;