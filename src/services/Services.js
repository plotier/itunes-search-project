
const API_URL ="https://itunes.apple.com/search?media=music&entity=album&limit=200&term="

export const getMusic = async (search) => {
    const response = await fetch(`${API_URL}${search}`);
    const data = await response.json();
    return data;
  }