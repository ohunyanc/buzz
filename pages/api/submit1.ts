import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'

type sheetForm = {
    firstname: string
    lastname: string
    email: string
    subject:string
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: "Only POST requests are allowed" })
    }

    const body = req.body as sheetForm

    try {
        //prepare auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL1,
                private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY1.replace(/\\n/g, '\n')

            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })
        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID1,
            range: 'A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.firstname, body.lastname, body.email, body.subject, body.message]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({ message: "Something went wrong" })
    }
}
