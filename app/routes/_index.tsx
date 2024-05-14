import pkg from "@material-tailwind/react";
import { MetaFunction } from "@remix-run/node";
import { BubbleChat } from "flowise-embed-react";
import { useState } from "react";
import { Header } from "~/components/Header";

const {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} = pkg;

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const txt = `Eldoria Castle - Comprehensive Information Guide
Overview of Eldoria Castle

History: Eldoria Castle was constructed in 1154 AD under the reign of King Edward III of Westoria. Originally designed as a fortified stronghold, it later became a royal residence in the 14th century, witnessing numerous historical events and royal ceremonies. The castle is a prime example of medieval architecture with its imposing stone walls, grand towers, and intricate carvings.
Location: Situated atop the Hills of Eldon, the castle offers panoramic views of the surrounding countryside and the distant Westoria City skyline. It is located approximately 20 miles north of Westoria City, easily accessible via Route 15.
Visiting Information

Opening Hours: Open from 9:00 AM to 5:00 PM, Tuesday through Sunday. Closed on Mondays for maintenance.
Admission Fees: $15 for adults, $10 for students and seniors, free for children under 12. Group discounts and special
rates are available for groups of 10 or more.

Accessibility: The castle is wheelchair accessible with designated pathways and ramps available throughout the grounds and in the main exhibition areas. Accessible restrooms are available near the main entrance and by the café.
Facilities and Amenities

Guided Tours: Daily guided tours are conducted at 10 AM, 12 PM, and 3 PM. These tours provide a detailed history of the castle, insights into medieval life, and stories about its most famous inhabitants.
Castle Café: Located near the entrance, the Castle Café serves a selection of local and international dishes, snacks, and a variety of beverages. Open during castle visiting hours.
Gift Shop: The castle gift shop offers a range of souvenirs, including replicas of artifacts found in the castle, books on medieval history, and themed merchandise. Open from 9:00 AM to 5:00 PM.
Events and Exhibitions

Current Exhibition: "The Knights of Eldoria: Armor and Weapons Through the Ages" is currently on display in the East Wing. This exhibition features historical armaments, interactive displays, and multimedia presentations on knightly warfare and defense strategies. The exhibition runs until December 31st.
Event Hosting: Eldoria Castle is available for private bookings, including weddings, corporate events, and other gatherings. The castle grounds and some halls are available for rent with catering options provided by the Castle Café.
Educational Programs

School Visits: Eldoria Castle offers educational programs for school groups, which include specialized tours and workshops on medieval history and archaeology. Programs are tailored to age groups ranging from elementary to high school.
Lectures and Workshops: Monthly lectures and workshops are held by historians and archaeologists, focusing on various aspects of medieval history, conservation techniques, and the ongoing research at the castle.
Conservation Efforts

Restoration Projects: Ongoing restoration efforts are crucial to maintaining the structural integrity and historical authenticity of Eldoria Castle. Recent projects include the stabilization of the South Tower and the restoration of the original frescoes in the Royal Hall.
Support and Funding: Eldoria Castle is supported by the National Heritage Trust and private donations. Visitors can contribute to the castle's preservation through donations or by becoming a member of the Friends of Eldoria Castle, which offers additional benefits like free entry and exclusive events.
Contact Information

General Inquiries: info@eldoriacastle.org
Ticket Booking: tickets@eldoriacastle.org
Event Booking: events@eldoriacastle.org
Phone: +123 4567 890
`;

export default function DataDocs() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Header />
      <div className="container px-4 md:px-72 mx-auto mt-12">
        <h1 className="text-2xl mb-4">
          <strong>Extending FAQs with Chatbot Integration</strong>
          {/* Demonstration of a Document-Based Chatbot with Fictional Data */}
        </h1>
        <p className="text-lg mb-6">
          This demonstration showcases how chatbots are transforming
          business-customer interactions by extending FAQ pages into dynamic,
          conversational experiences. Chatbots enhance the utility of FAQs by
          providing real-time, interactive responses, making information
          retrieval more engaging and efficient.
        </p>
        <p className="text-lg mb-6">
          In this example, we use fictional data to ensure it is not present in
          the GPT training dataset. The data is loaded from a text file. If the
          bot cannot find directly relevant information to the user query, it is
          instructed to seek the closest possible response and prompt the user
          to confirm its relevance.
        </p>

        <p className="text-lg mb-12">
          You can begin interacting with the chatbot by clicking the button
          located in the bottom right corner of the page. Feel free to ask
          questions related to the document provided below.
        </p>

        <div
          className="p-4 border border-black rounded-lg mb-12"
          style={{ height: "80rem" }}
        >
          <textarea
            className="w-full h-full p-4 text-gray-900 text-sm"
            value={txt}
            disabled={true}
          ></textarea>
        </div>

        <h2 className="text-xl mb-6">
          <strong>Chatbot Development Process Overview</strong>
        </h2>

        <p className="text-lg mb-6">
          This chatbot is developed using the&nbsp;
          <a
            href="https://flowiseai.com/"
            target="_blank"
            className="underline"
          >
            FlowiseAI
          </a>
          &nbsp;framework, which leverages LangChain.js—a TypeScript
          implementation of LangChain originally developed in Python. FlowiseAI
          excels in providing efficient, AI-driven solutions for dynamic
          conversational interfaces.
        </p>
        <p className="text-lg mb-6">
          Initially, the content from the text file is loaded and splitted into
          chunks. These chunks are then converted into vectors and stored in the
          database.
        </p>
        <p className="text-lg mb-6">
          When a user submits a query, the chatbot converts this query into a
          vector in the same way as the existing database entries. It then
          performs a similarity search in the vector database to find the
          vectors (entries) that are most similar to the query vector.
        </p>

        <p className="text-lg mb-6">
          Finally, the selected information is formatted and delivered to the
          user as an answer or response through the chat interface.
        </p>

        <p className="text-lg mb-6">
          Here is the FlowiseAI configuration for the chatbot showcased in this
          example:
        </p>

        <p
          className="mb-6 flex flex-col align-middle cursor-pointer"
          onClick={() => {
            handleOpen();
          }}
        >
          <img src="./flow.png"></img>
          <small>Click to emlarge</small>
        </p>

        <h2 className="text-xl mb-6">
          <strong>Website/App Integration Steps</strong>
        </h2>
        <p className="text-lg mb-6">
          To integrate a FlowiseAI-based chatbot into an existing website, as
          illustrated in this example, the process begins with hosting FlowiseAI
          on a cloud service. In this instance, FlowiseAI is deployed on
          HuggingFace.
        </p>
        <p className="text-lg mb-6">
          Additionally, a database is required to store the vectorized data
          derived from the documents. In this setup, MongoDB Atlas is utilized
          as the database, which supports vector search capabilities.
        </p>

        <p className="text-lg mb-6">
          An AI chat model is essential for this setup. Flowise supports
          multiple options, including OpenAI, AzureOpenAI, and
          GoogleGeminiGenerativeAI, among others. In this example, we utilize
          the OpenAI API with the GPT-3.5 Turbo model as the chat engine.
        </p>

        <p className="text-lg mb-12">
          The chat widget can be seamlessly integrated into an existing website
          using various methods such as HTML embedding or script embedding. For
          React applications, the integration can be efficiently achieved using
          the BubbleChat component.
        </p>

        <h2 className="text-xl mb-6">
          <strong>Understanding the Costs</strong>
        </h2>

        <p className="text-lg mb-12">
          Generally, there are fixed monthly costs associated with the cloud
          service for the API and the database. Additionally, the cost of the AI
          chat provider, such as OpenAI, varies based on the amount of usage.
          The number of chatbots that can be configured with a single Flowise
          instance is unlimited.
        </p>

        <h2 className="text-xl mb-6">
          <strong>Advanced Chatbot Features</strong>
        </h2>

        <p className="text-lg mb-12">
          In this example, a basic application of custom data in a chatbot is
          demonstrated. Beyond simple interactions, the setup can be enhanced to
          incorporate more advanced functionalities, such as triggering API
          calls in response to user queries. With such enhancements, chatbots
          are capable of performing external actions, like fetching data or
          interacting with other systems in real-time, which are directly
          influenced by the conversation flow and user inputs. These
          capabilities, facilitated through the function call feature of the
          chat models, enable seamless integration and dynamic responses within
          the chatbot's operations.
        </p>

        <h2 className="text-xl mb-6">
          <strong>Enhancing Customer Interaction</strong>
        </h2>
        <p className="text-lg mb-6">
          Adding a chatbot to an existing FAQ setup offers numerous benefits for
          customers, enhancing their overall experience in several key ways:
        </p>

        <p className="text-lg mb-6">
          <strong>Personalized Assistance</strong>: Chatbots can tailor their
          responses based on the context of the customer’s needs and previous
          interactions. This personalization makes the support experience more
          relevant and effective.
        </p>

        <p className="text-lg mb-12">
          <strong>Ease of Use:</strong> For many users, interacting with a
          chatbot can be easier and more intuitive than navigating through a
          list of FAQs. Chatbots can guide users through complex issues with
          step-by-step assistance that adapts to the flow of the conversation.
        </p>

        <Dialog open={open} handler={handleOpen} size="xl">
          <DialogBody>
            <img src="./flow.png"></img>
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>

        <BubbleChat
          chatflowid="bb5d7303-fd10-47d0-9b9a-1d2c09774070"
          apiHost="https://johngoyason-chatbot.hf.space"
          theme={{
            button: { backgroundColor: "#000" },
            chatWindow: { userMessage: { backgroundColor: "#000" } },
          }}
        />
      </div>
    </>
  );
}
