// import { hotelModel } from "@/models/hotel-model";
// import { replaceMongoIdInArray } from "@/utils/data-util";

import { hotelModel } from "@/models/hotel-model";
import { dbConnect } from "@/services/mongo";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllHotels() {
  await dbConnect();
  const hotels = await hotelModel.find().lean();
  return replaceMongoIdInArray(hotels);
}
