import "./index.scss";

function ContactForm() {
  return (
    <div className="panel-control">
      <input type="text" placeholder="ФИО" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <button>Учиться</button>
    </div>
  );
}

export default ContactForm;
