import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'

type sheetForm = {
    name: string
    phone: string
    email: string
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
                client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL2,
                private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY2.replace(/\\n/g, '\n')

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
            spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID2,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.phone, body.email, body.message]
                ]
            }
        })

        
        console.log({response: response.data} )

        return res.status(200).json({
            data: response.data
        })

    } catch (e) {
        console.error(e)
        return res.status(500).send({ message: "Something went wrong" })
    }
}
