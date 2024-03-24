import { log } from 'console'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

export const connectDB = async () => {
  const dbURL = process.env.DB_URL || ""
  try {
    log('connecting to this db url', dbURL)
    if (!dbURL) {
      throw new Error('missing db url')
    }
    await connect(dbURL)
  } catch (err) {
    log('error connecting to db', err)
  }
}
