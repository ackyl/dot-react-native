export default {
  card: {
    backgroundColor: 'rgba(215, 235, 255, 0.2)',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    fontFamily: 'Roboto',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  row: {
    flexDirection: 'row',
  },

  left: {
    container: {
      flex: 1,
    },
    label: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.4)',
      marginBottom: 4,
    },
    value: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
    },
  },

  right: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderRadius: 8,
      backgroundColor: 'rgba(215, 235, 255, 0.1)',
    },
    label: {
      fontSize: 14,
      color: 'white',
      marginHorizontal: 12,
      marginVertical: 8,
    },
  },
};
