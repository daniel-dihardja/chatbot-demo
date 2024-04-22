import pkg from "@material-tailwind/react";
import { BubbleChat } from "flowise-embed-react";
import { Header } from "~/components/Header";

const { Card, CardBody, CardFooter, CardHeader, Typography } = pkg;

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
  return (
    <>
      <Header />
      <div className="container px-4 md:px-72 mx-auto mt-12">
        <h1 className="text-2xl mb-4">
          <strong>From Static to Dynamic: Extending FAQs with Chatbots</strong>
          {/* Demonstration of a Document-Based Chatbot with Fictional Data */}
        </h1>
        <p className="text-lg mb-6">
          This demonstration showcases how chatbots are revolutionizing
          business-customer interactions by extending FAQ pages into dynamic,
          conversational experiences. Chatbots enhance the utility of FAQs by
          providing real-time, interactive responses, making information
          retrieval more engaging and efficient.
        </p>
        <p className="text-lg mb-6">
          In this example, we use fictional data to ensure it is not present in
          the GPT training dataset. The data is loaded from a text file. The bot
          is specifically programmed to use only this data; if additional
          information is required, it will direct users to the general inquiry
          email address.
        </p>
        <p className="text-lg mb-12">
          You can start interacting with the chatbot by clicking the button
          located in the bottom right corner of the page.
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
          <strong>Step-by-Step Breakdown</strong>
        </h2>

        <p className="text-lg mb-6">
          This chatbot is developed using the&nbsp;
          <a
            href="https://flowiseai.com/"
            target="_blank"
            className="underline"
          >
            FlowiseAI&nbsp;
          </a>
          framework. FlowiseAI excels in providing efficient, AI-driven
          solutions for dynamic conversational interfaces. Initially, the
          content from the text file is loaded and splitted into chunks. These
          chunks are then converted into vectors and stored in the database.
        </p>
        <p className="text-lg mb-6">
          When a user submits a query, the chatbot converts this query into a
          vector in the same way as the existing database entries. It then
          performs a similarity search in the vector database to find the
          vectors (entries) that are most similar to the query vector.
        </p>

        <p className="text-lg mb-6">
          The vectors returned from the database are ranked based on their
          similarity to the query vector. This ranking helps in identifying the
          most relevant answers or information to the user’s question.
        </p>

        <p className="text-lg mb-12">
          Finally, the selected information is formatted and delivered to the
          user as an answer or response through the chat interface.
        </p>

        <h2 className="text-xl mb-6">
          <strong>Conclusion</strong>
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

        <BubbleChat
          chatflowid="0595a837-39da-4f7c-8259-ef2172309c8c"
          apiHost="https://johngoyason-chatbot.hf.space"
          theme={{ button: { backgroundColor: "#000" } }}
        />
      </div>
    </>
  );
}
