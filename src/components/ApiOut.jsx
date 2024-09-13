import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function ApiOut(props) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);


  const title = props.title;
  const number = props.number;

  // Array of loading messages
  const loadingMessages = [
    `Delving into the depths of the Indian Constitution... Please hold on.`,
    `Unraveling the intricacies of Article ${number}... This might take a moment.`,
    `Exploring the historic provisions of the Indian Constitution... Stay tuned!`,
    `Decoding the legal framework of Article ${number}... We appreciate your patience.`,
    `Gathering insights from the Indian Constitution... Almost there!`,
    `Fetching the details on Article ${number}...`,
    `Compiling a comprehensive view of Article ${number}... Thanks for waiting!`,
    `Retrieving constitutional wisdom for Article ${number}... Hang tight!`,
    `Analyzing the provisions of Article ${number}... Your detailed explanation is coming soon.`,
    `We’re digging into the rich history of Article ${number}... Just a moment longer.`
  ];

  // Function to get a random loading message
  function getRandomLoadingMessage() {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
  }

  // Function to fetch the API content and return it
  async function GenSum() {
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: `Provide a detailed explanation of Article ${title} from the Indian Constitution. Exclude the article name from the beginning of the response. The explanation should include the following:
- Key provisions and clauses of the article.
- Historical context and significance.
- Its impact on Indian law and society.
- A total description of the article as it is written in the Indian Constitution.
- A detailed analysis of around 1000 words that elaborates on the article’s relevance and implications.
` }] }], 
        },
      });
      return response.data.candidates[0].content.parts[0].text; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Sorry - We couldn't give you what you asked for, Please try again later...";
    }
  }

  useEffect(() => {
    async function fetchContent() {
      setLoading(true); 
      const fetchedContent = await GenSum(); 
      setContent(fetchedContent); 
      setLoading(false); 
    }
    
    fetchContent(); 
  }, [title]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mr-10 space-y-7">
        <div className="bg-[#D4A373] rounded mx-auto p-4">
          {loading ? (
            <p className="text-lg font-merri text-black bg-[#D4A373] leading-relaxed whitespace-pre-line">
              {getRandomLoadingMessage()} {/* Display a random loading message */}
            </p>
          ) : (
            <p className="text-lg font-libre text-black bg-[#D4A373] leading-relaxed whitespace-pre-line">
              {content.replace(/\*/g, '')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

ApiOut.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
