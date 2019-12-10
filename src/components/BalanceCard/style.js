export default {
  card: {
    backgroundColor: '#ffc52b',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    fontFamily: 'Roboto',
  },

  top: {
    container: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginTop: 12,
    },
    account: {
      marginTop: 5,
      fontSize: 12,
      fontWeight: 'bold',
      flex: 1,
    },
    box: {
      backgroundColor: 'red',
      borderRadius: 8,
    },
    status: {
      fontSize: 10,
      fontWeight: '800',
      color: 'white',
      margin: 6,
    },
  },

  middle: {
    container: {
      marginTop: 12,
      marginHorizontal: 16,
      marginBottom: 16,
    },
    label: {
      color: 'rgba(15, 24, 33, 0.45)',
      fontSize: 12,
    },
    value: {
      fontWeight: '600',
      fontSize: 32,
    },
  },

  bottom: {
    container: {
      flex: 1,
      paddingVertical: 24,
      marginLeft: 16,
    },

    label: {
      fontSize: 12,
      color: 'rgba(15, 24, 33, 0.45)',
      marginBottom: 6,
    },

    value: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  },

  hLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(52, 52, 52, 0.4)',
  },
  vLine: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    height: 100,
    width: 1,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
};
