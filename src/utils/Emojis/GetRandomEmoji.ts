import GetRandomInt from "../GetRandomInt"
import { EmojisProps } from "./types"

export default function GetRandomSadEmojis(emojis: Array<EmojisProps>){

    let random = GetRandomInt(1, emojis.length)
    return emojis.find(emoji => emoji.id === random)?.emoji

}