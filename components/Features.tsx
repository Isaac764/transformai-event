import {
  FaBrain,
  FaUsers,
  FaChartLine,
  FaCrown
} from "react-icons/fa";

export default function Features() {

  const items = [
    {
      icon: <FaBrain />,
      title: "Mentalidade de Reino"
    },
    {
      icon: <FaUsers />,
      title: "Networking Estratégico"
    },
    {
      icon: <FaChartLine />,
      title: "Negócios"
    },
    {
      icon: <FaCrown />,
      title: "Propósito"
    }
  ];

  return (
    <section className="py-24 bg-[#050505]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 transition"
          >

            <div className="text-yellow-500 text-4xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-white text-xl font-bold">
              {item.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}