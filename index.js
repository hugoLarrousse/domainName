const got = require('got');

const getExpirationTime = async (domainName) => {
	try {
		const response = await got(`https://rdap.verisign.com/com/v1/domain/${domainName}`);
		console.log(JSON.parse(response.body).events.find(e => e.eventAction === 'expiration'));
	} catch (error) {
    console.log('error', error);
		// console.log(error.response.body);
	}
};


getExpirationTime('test.com');