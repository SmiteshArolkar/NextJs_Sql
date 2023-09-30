import { db } from "@/config/db";

// Function to insert an event into the database
async function insertEvent(eventData) {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO events (adminid, content, description, imageUrl, title) VALUES (?, ?, ?, ?, ?)";
    const values = [
      eventData.adminid,
      eventData.content,
      eventData.description,
      eventData.imageUrl,
      eventData.title,
    ];

    db.query(sql, values, (error, result) => {
      if (error) {
        console.error("Database error:", error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

export default async (req, res) => {
  try {
    const eventData = req.body;
    const result = await insertEvent(eventData);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "An error occurred while inserting the event.",
    });
  }
};
