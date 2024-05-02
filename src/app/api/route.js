import ytdl from 'ytdl-core'
import { NextResponse } from 'next/server'
export async function POST(request) {
    console.log("Hello from api")
    const { youtubeurl } = await request?.json()
    console.log("Body data",youtubeurl)

    try {
        const info = await ytdl.getInfo(youtubeurl);

        // Extract the player response from the video info
        const playerResponse = info.player_response;

        // Check if player response exists and contains streaming data
        if (playerResponse && playerResponse.streamingData && playerResponse.streamingData.adaptiveFormats) {
            // Extract the adaptive formats from the streaming data
            const adaptiveFormats = playerResponse.streamingData.adaptiveFormats;

            // Return the adaptive formats in the response
            return NextResponse.json({
                data:adaptiveFormats
            });
        } else {
            throw new Error('Streaming data not found in player response');
        }
    } catch (err) {
        return NextResponse.error({
            errors: err.message
        })
    }
    
}

