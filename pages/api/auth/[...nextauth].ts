import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

var mysql = require("mysql2");

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			id: 'credential-login',
			name: 'Account',
			async authorize(credentials) {
				let user = {
					email: credentials.email,
					id: null,
					image: null,
					name: null
				};
				function userExists(credentials) {
					return new Promise((resolve, reject) => {
						var connection = mysql.createConnection({
							host: process.env.HOST,
							user: process.env.ROOTUSER,
							database: process.env.DATABASE,
							password: process.env.PASSWORD,
						});
						connection.query(`SELECT * FROM users WHERE email = "${credentials.email}" AND password = "${credentials.password}"`, (err, result) => {
							console.log(result);
							if (result && result.length > 0) {
								const username = result[0].username;
								resolve({
									email: credentials.email,
									id: null,
									image: null,
									name: username
								});
							} else {
								console.log("null");
								resolve(null);
							}
						})

					})
				}
				// userExists(connection, credentials).then(() => { console.log("resolve"); return user; }).catch(err => { console.log("null"); return null });
				return userExists(credentials);
				// connection.query(
				// 	// `SELECT user_id FROM (SELECT * FROM users WHERE email = "${credentials.email}" AND password = "${credentials.password}") as username`,
				// 	`SELECT * FROM users WHERE email = "${credentials.email}" AND password = "${credentials.password}"`,

				// 	(err, result) => {
				// 		console.log(result);
				// 		if (result && result.length > 0) {
				// 			console.log("found");
				// 			return user;
				// 		} else {
				// 			console.log("null");
				// 			return null;
				// 		}
				// 	}
				// )
			},
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: '123@hotmail.com',
				},
				password: { label: 'Password', type: 'password' },
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60
	},
	secret: "h0NPOuIOBhqda2vMne+TFLJO8aajSJu6wHplvUyX3CA="
	// database: process.env.DATABASE_URL,
});
