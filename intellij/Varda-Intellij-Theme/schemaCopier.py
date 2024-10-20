import sys
import re

def replace_text_in_file(input_file, output_file):
    try:
        with open(input_file, 'r') as file:
            file_data = file.read()

        # Replace the text
        file_data = re.sub(r"Varda", "Everforest", file_data, flags=re.IGNORECASE)
        # white
        file_data = re.sub(r"D0EBEE", "D3C6AA", file_data, flags=re.IGNORECASE)
        # black
        file_data = re.sub(r"0C0E11", "1E2326", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"C0E11", "1E2326", file_data, flags=re.IGNORECASE)
        # greys
        file_data = re.sub(r"121519", "272E33", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"171B21", "2E383C", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"1C2128", "374145", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"222830", "414B50", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"272E38", "495156", file_data, flags=re.IGNORECASE)
        file_data = re.sub(r"38414F", "4F5B58", file_data, flags=re.IGNORECASE)
        # primary
        file_data = re.sub(r"52677C", "A7C080", file_data, flags=re.IGNORECASE)
        # primary alt
        file_data = re.sub(r"8295A9", "7A8478", file_data, flags=re.IGNORECASE)
        # secondary
        file_data = re.sub(r"665276", "E69875", file_data, flags=re.IGNORECASE)
        # tertiary / warning / yellow
        file_data = re.sub(r"C78C56", "DBBC7F", file_data, flags=re.IGNORECASE)
        # error / red
        file_data = re.sub(r"733447", "E67E80", file_data, flags=re.IGNORECASE)
        # success / green
        file_data = re.sub(r"257B76", "83C092", file_data, flags=re.IGNORECASE)
        # VCS modified
        file_data = re.sub(
            r'<option name="FILESTATUS_MODIFIED" value="A7C080" />',
            '<option name="FILESTATUS_MODIFIED" value="7FBBB3" />',
            file_data,
            flags=re.IGNORECASE
        )

        # Write the new content to the output file
        with open(output_file, 'w') as file:
            file.write(file_data)

        print(f"File processed and saved as {output_file}")

    except FileNotFoundError:
        print(f"The file {input_file} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_file> <output_file>")
    else:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        replace_text_in_file(input_file, output_file)