import React from 'react';

export default function Page() {
  return (
    <div style={styles.container}>
      {/* Top row - Add your own image */}
      <div style={styles.imageContainer}>
        <img
          src="/Images/1.png"
          alt="Top Row"
          style={styles.image}
        />
      </div>
      {/* Middle row - Add your own image */}
      <div style={styles.imageContainer}>
        <img
          src="Images/2.png"
          alt="Middle Row"
          style={styles.image}
        />
      </div>

      {/* Booking Info */}
      <div style={styles.bookingInfo}>
        <p style={styles.ticketText}>
          <strong>1 Ticket(s)</strong>
          <br />
          SCREEN 1
          <br />
          DRESS Whatever you wear you look pretty
          <br />
          BOOKING ID: WHL6CTF
        </p>
        <p style={styles.note}>
          A confirmation is sent on e-mail/SMS/WhatsApp within 15 minutes of
          booking.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={styles.actionRow}>
        <a
          href="https://wa.me/9393322111" // WhatsApp link
          style={styles.supportButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact support +91 93933 22111
        </a>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',  // Ensuring 'flexDirection' is valid
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '90%',
    borderRadius: '8px',
  },
  bookingInfo: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '90%',
  },
  ticketText: {
    margin: '0',
    fontSize: '1rem',
  },
  note: {
    marginTop: '10px',
    fontSize: '0.8rem',
    color: '#888',
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    marginTop: '20px',
  },
  supportButton: {
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#2196f3',
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
